import { SET_USER_ADDRESS, SET_USER_LOADING, SET_USER_COMITTMENT } from './constants';
import { selectLockedAccountAddress } from '../reducers/icoParameters';
import loadUserCommitmentFromWeb3 from '../web3/loadUserCommitment';

export function setUserAddressAction(address, addressFromWeb3) {
  return {
    type: SET_USER_ADDRESS,
    payload: {
      address,
      addressFromWeb3,
    },
  };
}

export function setUserLoadingAction(loading) {
  return {
    type: SET_USER_LOADING,
    payload: {
      loading,
    },
  };
}

export function setUserCommitmentAction(neumarkAmmount, weiAmmount) {
  return {
    type: SET_USER_COMITTMENT,
    payload: {
      neumarkAmmount,
      weiAmmount,
    },
  };
}

export const setUserAddress = (address, fromWeb3) => async (dispatch, getState) => {
  dispatch(setUserAddressAction(address, fromWeb3));
  dispatch(setUserLoadingAction(true));
  const { neumarkAmmount, weiAmmount } = await loadUserCommitmentFromWeb3(
    address,
    selectLockedAccountAddress(getState().icoParameters)
  );
  dispatch(setUserCommitmentAction(neumarkAmmount, weiAmmount));
};
