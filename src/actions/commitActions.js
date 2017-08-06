import sendETH from '../web3/sendETH';
import { selectAddress } from '../reducers/icoParameters';
import { COMMITING_STARTED, COMMITING_TRANSACTION_SUBMITTED, COMMITING_DONE, COMMITING_ERROR } from './constants';

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


export function commitingError(e) {
  return {
    type: COMMITING_ERROR,
    payload: e,
  };
}

// eslint-disable-next-line no-unused-vars,import/prefer-default-export
export const commitETH = (ammount, userAddress) => async (dispatch, getState) => {
  const state = getState();
  const address = selectAddress(state.icoParameters);

  dispatch(sendETH(address, ammount, userAddress));
};
