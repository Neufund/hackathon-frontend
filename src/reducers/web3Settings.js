import { LOAD_DEFAULT_ACCOUNT } from '../actions/constants';

const initialState = {
  isLoading: true,
  defaultAddress: null,
};

export default function web3settings(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_DEFAULT_ACCOUNT:
      return {
        ...state,
        isLoading: false,
        defaultAddress: payload,
      };
    default:
      return state;
  }
}

export function selectDefaultAccount(state) {
  return state.defaultAddress;
}
