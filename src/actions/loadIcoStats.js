import { selectLockedAccountAddress, selectNeumarkTokenAddress } from '../reducers/icoParameters';
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
  const lockedAccountAddress = selectLockedAccountAddress(getState().icoParameters);
  const neumarkTokenAddress = selectNeumarkTokenAddress(getState().icoParameters);

  const {
    raised,
    investorNumber,
    neuMarkAmount,
    neuMarkToEtherRatio,
  } = await loadIcoStatsFromContract(lockedAccountAddress, neumarkTokenAddress);
  dispatch(loadIcoStatsAction(raised, investorNumber, neuMarkAmount, neuMarkToEtherRatio));
}
