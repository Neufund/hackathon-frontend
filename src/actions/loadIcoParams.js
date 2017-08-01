import { selectAddress } from '../reducers/icoParameters';
import { LOAD_ICO_PARAMS } from './constants';
import loadIcoParamsFromContract from '../web3/loadIcoParamsFromContract';

export function loadIcoParamsAction(startDate, endDate) {
  return {
    type: LOAD_ICO_PARAMS,
    payload: {
      startDate,
      endDate,
    },
  };
}

export async function loadIcoParams(dispatch, getState) {
  const address = selectAddress(getState().icoParameters);
  const { startDate, endDate } = await loadIcoParamsFromContract(address);

  dispatch(loadIcoParamsAction(startDate, endDate));
}

