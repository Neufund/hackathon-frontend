import invariant from 'invariant';
import { LockedAccount, Neumark } from './contracts';
import { asNumber, asEtherNumber } from './utils';

export default async function loadIcoStats(lockedAccountAddress, neumarkAddress) {
  invariant(lockedAccountAddress, 'Specify adddress!');
  invariant(neumarkAddress, 'Specify adddress!');

  const lockedAccount = LockedAccount(lockedAccountAddress);
  const neumark = Neumark(neumarkAddress);

  const [totalInvestors, totalLockedAmount, neumarkSupply] = await Promise.all([
    lockedAccount.totalInvestorsAsync().then(asNumber),
    lockedAccount.totalLockedAmountAsync().then(asEtherNumber),
    neumark.totalSupplyAsync().then(asNumber),
  ]);

  return {
    investorNumber: totalInvestors,
    raised: totalLockedAmount,
    neuMarkAmount: neumarkSupply,
    neuMarkToEtherRatio: 1000000,
  };
}
