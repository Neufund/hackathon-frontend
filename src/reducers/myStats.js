import { SET_USER_ADDRESS, SET_USER_LOADING, SET_USER_COMITTMENT } from '../actions/constants';

const initialState = {
  loading: false,
  address: null,
  addressFromWeb3: null,
  neumarkAmmount: null,
  weiAmmount: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_ADDRESS:
      return {
        ...state,
        address: payload.address,
        addressFromWeb3: payload.addressFromWeb3,
      };
    case SET_USER_LOADING:
      return {
        ...state,
        loading: payload.loading,
      };
    case SET_USER_COMITTMENT:
      return {
        ...state,
        loading: false,
        neumarkAmmount: payload.neumarkAmmount,
        weiAmmount: payload.weiAmmount,
      };
    default:
      return state;
  }
}
