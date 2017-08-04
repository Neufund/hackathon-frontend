import { COMMITING_STARTED, COMMITING_TRANSACTION_SUBMITTED, COMMITING_DONE, COMMITING_ERROR } from '../actions/constants';

const initialState = {
  commiting: false,
  transactionSubmitted: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case COMMITING_STARTED: {
      return {
        error: null,
        commiting: true,
        transactionSubmitted: false,
      };
    }
    case COMMITING_TRANSACTION_SUBMITTED: {
      return {
        ...state,
        transactionSubmitted: true,
      };
    }
    case COMMITING_DONE: {
      return {
        error: null,
        commiting: false,
        transactionSubmitted: false,
      };
    }
    case COMMITING_ERROR: {
      return {
        commiting: false,
        transactionSubmitted: false,
        error: payload,
      };
    }
    default:
      return state;
  }
}
