import LockedAccount from "./contracts/LockedAccount";
import Neumark from "./contracts/Neumark";
import web3 from "./web3Provider";
import { asNumber, asEtherNumber } from "./utils";

export default async function loadIcoStats(lockedAccountAddress: string, neumarkAddress: string) {
  const lockedAccount = await LockedAccount.createAndValidate(web3, lockedAccountAddress);
  const neumark = await Neumark.createAndValidate(web3, neumarkAddress);

  const [totalInvestors, totalLockedAmount, neumarkSupply] = await Promise.all([
    lockedAccount.totalInvestors.then(asNumber),
    lockedAccount.totalLockedAmount.then(asEtherNumber),
    neumark.totalSupply.then(asNumber),
  ]);

  return {
    investorNumber: totalInvestors,
    raised: totalLockedAmount,
    neuMarkAmount: neumarkSupply,
    neuMarkToEtherRatio: 1000000,
  };
}
