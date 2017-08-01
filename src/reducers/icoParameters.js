import config from '../config';
import { LOAD_ICO_PARAMS } from '../actions/constants';

const initialState = {
  loading: true,
  address: config.icoContractAddress,
  startDate: null,
  endDate: null,
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
      };
    default:
      return state;
  }
}


export function selectAddress(state) {
  return state.address;
}
