import { SET_USER_ADDRESS, SET_USER_LOADING, LOAD_USER_NEUMARKS } from '../actions/constants';

const initialState = {
  loading: false,
  address: null,
  neumarkAmmount: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_ADDRESS:
      return {
        ...state,
        address: payload.address,
      };
    case SET_USER_LOADING:
      return {
        ...state,
        loading: payload.loading,
      };
    case LOAD_USER_NEUMARKS:
      return {
        ...state,
        neumarkAmmount: payload.neumarkAmmount,
      };
    default:
      return state;
  }
}
