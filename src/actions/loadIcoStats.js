import { selectAddress } from '../reducers/icoParameters';
import { LOAD_ICO_STATS } from './constants';
import loadIcoStatsFromContract from '../web3/loadIcoStats';

export function loadIcoStatsAction(neuMarkAmount) {
  return {
    type: LOAD_ICO_STATS,
    payload: {
      neuMarkAmount,
    },
  };
}

export async function loadIcoStats(dispatch, getState) {
  const address = selectAddress(getState().icoParameters);
  const { neuMarkAmount } = await loadIcoStatsFromContract(address);

  dispatch(loadIcoStatsAction(neuMarkAmount));
}

