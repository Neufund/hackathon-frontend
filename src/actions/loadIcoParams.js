import { selectAddress } from '../reducers/icoParameters';
import { LOAD_ICO_PARAMS } from './constants';
import loadIcoParamsFromContract from '../web3/loadIcoParamsFromContract.ts';

export function loadIcoParamsAction(
  startDate, endDate, lockedAccountAddress, neumarkTokenAddress, minCap, maxCap
) {
  return {
    type: LOAD_ICO_PARAMS,
    payload: {
      startDate,
      endDate,
      lockedAccountAddress,
      neumarkTokenAddress,
      minCap,
      maxCap,
    },
  };
}

export async function loadIcoParams(dispatch, getState) {
  const address = selectAddress(getState().icoParameters);
  const {
    startDate,
    endDate,
    lockedAccountAddress,
    neumarkTokenAddress,
    minCap,
    maxCap,
  } = await loadIcoParamsFromContract(address);

  dispatch(loadIcoParamsAction(
    startDate, endDate, lockedAccountAddress, neumarkTokenAddress, minCap, maxCap
  ));
}

