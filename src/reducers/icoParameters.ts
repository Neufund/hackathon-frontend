import * as moment from 'moment';

import config from '../config';
import { LOAD_ICO_PARAMS, IcoPhase, NEW_PHASE_ACTION } from '../actions/constants';
import { checkPhase } from '../actions/checkPhase';

export interface IcoParametersState {
  loading: boolean;
  address: string;
  lockedAccountAddress: string;
  neumarkTokenAddress: string;
  startDate: string;
  endDate: string;
  minCap: number;
  maxCap: number;
  icoPhase: IcoPhase;
}

const initialState: IcoParametersState = {
  loading: true,
  address: config.icoContractAddress,
  lockedAccountAddress: null,
  neumarkTokenAddress: null,
  startDate: null,
  endDate: null,
  minCap: 0,
  maxCap: 0,
  icoPhase: IcoPhase.UNKNOWN,
};

export default function (state = initialState, action: any): IcoParametersState {
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
        minCap: payload.minCap,
        maxCap: payload.maxCap,
      };
    case NEW_PHASE_ACTION:
      return {
        ...state,
        icoPhase: payload,
      };
    default:
      return state;
  }
}


export function selectAddress(state: IcoParametersState) {
  return state.address;
}

export function selectLockedAccountAddress(state: IcoParametersState) {
  return state.lockedAccountAddress;
}

export function selectNeumarkTokenAddress(state: IcoParametersState) {
  return state.neumarkTokenAddress;
}

export function selectStartDate(state: IcoParametersState ) {
  return moment(state.startDate);
}

export function selectEndDate(state: IcoParametersState) {
  return moment(state.endDate);
}

export function selectIcoPhase(state: IcoParametersState) {
  return state.icoPhase;
}

export function selectLoadingState(state: IcoParametersState) {
  return state.loading;
}
