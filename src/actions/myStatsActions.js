import { SET_USER_ADDRESS, SET_USER_LOADING, SET_USER_NEUMARKS } from './constants';
import loadUserNeumarks from '../web3/loadUserNeumarks';

export function setUserAddressAction(address, fromWeb3) {
  return {
    type: SET_USER_ADDRESS,
    payload: {
      address,
      fromWeb3,
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

export function setUserNeuMarksAction(neumarkAmmount) {
  return {
    type: SET_USER_NEUMARKS,
    payload: {
      neumarkAmmount,
    },
  };
}

export const setUserAddress = (address, fromWeb3) => async (dispatch) => {
  dispatch(setUserAddressAction(address, fromWeb3));
  dispatch(setUserLoadingAction(true));
  const neumarks = await loadUserNeumarks(address);
  dispatch(setUserNeuMarksAction(neumarks));
};
