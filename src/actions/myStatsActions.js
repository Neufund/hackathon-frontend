import { SET_USER_ADDRESS, SET_USER_LOADING, SET_USER_NEUMARKS } from './constants';
import loadUserNeumarks from '../web3/loadUserNeumarks';

export function setUserAddressAction(address) {
  return {
    type: SET_USER_ADDRESS,
    payload: {
      address,
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

export const setUserAddress = address => async (dispatch) => {
  dispatch(setUserAddressAction(address));
  dispatch(setUserLoadingAction(true));
  const neumarks = await loadUserNeumarks(address);
  dispatch(setUserNeuMarksAction(neumarks));
};
