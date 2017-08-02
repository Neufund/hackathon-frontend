import { LOAD_ICO_STATS } from '../actions/constants';

const initialState = {
  loading: true,
  raised: null,
  investorNumber: null,
  neuMarkAmount: null,
  neuMarkToEtherRatio: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ICO_STATS:
      return {
        ...state,
        loading: false,
        neuMarkAmount: payload.neuMarkAmount,
        raised: payload.raised,
        investorNumber: payload.investorNumber,
        neuMarkToEtherRatio: payload.neuMarkToEtherRatio,
      };
    default:
      return state;
  }
}
