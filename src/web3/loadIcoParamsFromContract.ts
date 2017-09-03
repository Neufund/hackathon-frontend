import Crowdsale from "./contracts/Crowdsale";
import web3 from "./web3Provider";
import { asEtherNumber, asMomentDate } from "./utils";

export default async function loadIcoParamsFromContract(address: string) {
  const icoContract = new Crowdsale(web3, address);

  const [startDate, endDate, lockedAccountAddress, neumarkTokenAddress, minCap, maxCap] = await Promise.all([
    icoContract.startDate.then(asMomentDate),
    icoContract.endDate.then(asMomentDate),
    icoContract.lockedAccount,
    icoContract.neumarkToken,
    icoContract.minCap.then(asEtherNumber),
    icoContract.maxCap.then(asEtherNumber),
  ]);

  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    lockedAccountAddress,
    neumarkTokenAddress,
    minCap,
    maxCap,
  };
}
