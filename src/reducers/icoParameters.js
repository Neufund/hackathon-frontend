import moment from 'moment';
import invariant from 'invariant';

import config from '../config';
import { LOAD_ICO_PARAMS, ICO_PHASES } from '../actions/constants';
import { checkPhase } from '../actions/checkPhase';

const initialState = {
  loading: true,
  address: config.icoContractAddress,
  startDate: '2017-08-02T13:42:07.811Z', // @todo do not merge
  endDate: '2017-08-05T13:42:07.811Z', // @todo do not merge
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
      };
    default:
      return state;
  }
}


export function selectAddress(state) {
  return state.address;
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
