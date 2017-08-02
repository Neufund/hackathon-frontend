import Bluebird from 'bluebird';
import moment from 'moment';
import { selectStartDate, selectEndDate } from '../reducers/icoParameters';
import { ICO_PHASES, NEW_PHASE_ACTION } from './constants';

export function changePhaseAction(newPhase) {
  return {
    type: NEW_PHASE_ACTION,
    payload: newPhase,
  };
}

export function checkPhase(icoParams) {
  const now = moment();

  const startDate = selectStartDate(icoParams);

  const endDate = selectEndDate(icoParams);

  if (now.isBefore(startDate)) {
    return ICO_PHASES.BEFORE_ICO;
  }

  if (now.isBefore(endDate)) {
    return ICO_PHASES.DURING_ICO;
  }

  return ICO_PHASES.AFTER_ICO;
}


// long running action that makes sure that phase of the ICO is up to date
// this is a great use case for sagas
export default async function (dispatch, getState) {
  // @todo reduce boilerplate
  // this is needed so initial state of the application is calculated correctly
  // let lastPhase = checkPhase(getState().icoParameters);
  // dispatch(changePhaseAction(lastPhase));

  let lastPhase;

  while (true) { // eslint-disable-line
    await Bluebird.delay(1000); // eslint-disable-line

    // @todo: change this ASAP
    if (!getState().icoParameters.startDate) continue; // eslint-disable-line
    const newPhase = checkPhase(getState().icoParameters);

    if (lastPhase !== newPhase) {
      dispatch(changePhaseAction(newPhase));
      lastPhase = newPhase;
    }
  }
}
