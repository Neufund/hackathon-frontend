import sendETH from "../web3/sendETH";
import { selectAddress } from "../reducers/icoParameters";
import { COMMITING_STARTED, COMMITING_TRANSACTION_SUBMITTED, COMMITING_DONE, COMMITING_ERROR } from "./constants";
import { AppState } from "../reducers/index";
import { ThunkAction } from "redux-thunk";

export function commitingStartedAction() {
  return {
    type: COMMITING_STARTED,
  };
}

export function commitingTransactionSubmittedAction() {
  return {
    type: COMMITING_TRANSACTION_SUBMITTED,
  };
}

export function commitingDoneAction() {
  return {
    type: COMMITING_DONE,
  };
}

export function commitingError(e: any) {
  return {
    type: COMMITING_ERROR,
    payload: e,
  };
}

export const commitETH = (ammount: number, userAddress: string): ThunkAction<{}, AppState, {}> => async (
  dispatch,
  getState
) => {
  const state = getState();
  const address = selectAddress(state.icoParameters);

  dispatch(sendETH(address, ammount, userAddress));
};
