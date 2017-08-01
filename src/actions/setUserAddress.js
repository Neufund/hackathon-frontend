import Bluebird from 'bluebird';
import { SET_USER_ADDRESS, SET_USER_LOADING, LOAD_USER_NEUMARKS } from './constants';
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
    type: LOAD_USER_NEUMARKS,
    payload: {
      neumarkAmmount,
    },
  };
}

export const setUserAddress = address => async (dispatch) => {
  dispatch(setUserAddressAction(address));
  dispatch(setUserLoadingAction(true));
  await Bluebird.delay(3000); // eslint-disable-line
  const neumarks = await loadUserNeumarks(address);
  dispatch(setUserLoadingAction(false));
  dispatch(setUserNeuMarksAction(neumarks));
};
