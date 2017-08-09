import * as Bluebird from "bluebird";
import * as moment from "moment";
import { selectStartDate, selectEndDate, IcoParametersState } from "../reducers/icoParameters";
import { IcoPhase, NEW_PHASE_ACTION } from "./constants";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../reducers/index";

export function changePhaseAction(newPhase: IcoPhase) {
  return {
    type: NEW_PHASE_ACTION,
    payload: newPhase,
  };
}

export function checkPhase(icoParams: IcoParametersState) {
  const now = moment();

  const startDate = selectStartDate(icoParams);

  const endDate = selectEndDate(icoParams);

  if (now.isBefore(startDate)) {
    return IcoPhase.BEFORE_ICO;
  }

  if (now.isBefore(endDate)) {
    return IcoPhase.DURING_ICO;
  }

  return IcoPhase.AFTER_ICO;
}

// long running action that makes sure that phase of the ICO is up to date
// this is a great use case for sagas
const checkPhaseSaga: ThunkAction<{}, AppState, {}> = async function(dispatch, getState) {
  let lastPhase;

  while (true) {
    // eslint-disable-line
    await Bluebird.delay(1000); // eslint-disable-line

    // @todo: change this ASAP
    if (!getState().icoParameters.startDate) continue; // eslint-disable-line
    const newPhase = checkPhase(getState().icoParameters);

    if (lastPhase !== newPhase) {
      dispatch(changePhaseAction(newPhase));
      lastPhase = newPhase;
    }
  }
};

export default checkPhaseSaga;
