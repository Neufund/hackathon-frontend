import moment from 'moment';
import invariant from 'invariant';

import config from '../config';
import { LOAD_ICO_PARAMS, ICO_PHASES } from '../actions/constants';
import { checkPhase } from '../actions/checkPhase';

const initialState = {
  loading: true,
  address: config.icoContractAddress,
  startDate: null,
  endDate: null,
  icoPhase: ICO_PHASES.UNKNOWN,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ICO_PARAMS:
      return {
        ...state,
        loading: false,
        startDate: payload.startDate,
        endDate: payload.endDate,
        icoPhase: checkPhase(payload),
        lockedAccountAddress: payload.lockedAccountAddress,
        neumarkTokenAddress: payload.neumarkTokenAddress,
      };
    default:
      return state;
  }
}


export function selectAddress(state) {
  return state.address;
}

export function selectLockedAccountAddress(state) {
  return state.lockedAccountAddress;
}

export function selectNeumarkTokenAddress(state) {
  return state.neumarkTokenAddress;
}

export function selectStartDate(state) {
  invariant(state.startDate, 'startDate is not defined!');

  return moment(state.startDate);
}

export function selectEndDate(state) {
  invariant(state.endDate, 'endDate is not defined!');

  return moment(state.endDate);
}

export function selectIcoPhase(state) {
  return state.icoPhase;
}

export function selectLoadingState(state) {
  return state.loading;
}
