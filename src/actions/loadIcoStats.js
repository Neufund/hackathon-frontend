import { selectAddress } from '../reducers/icoParameters';
import { LOAD_ICO_STATS } from './constants';
import loadIcoStatsFromContract from '../web3/loadIcoStats';

export function loadIcoStatsAction(raised, investorNumber, neuMarkAmount, neuMarkToEtherRatio) {
  return {
    type: LOAD_ICO_STATS,
    payload: {
      raised,
      investorNumber,
      neuMarkAmount,
      neuMarkToEtherRatio,
    },
  };
}

export async function loadIcoStats(dispatch, getState) {
  const address = selectAddress(getState().icoParameters);
  const { raised, investorNumber, neuMarkAmount,
    neuMarkToEtherRatio } = await loadIcoStatsFromContract(address);
  dispatch(loadIcoStatsAction(raised, investorNumber, neuMarkAmount, neuMarkToEtherRatio));
}
