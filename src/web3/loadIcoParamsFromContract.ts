import { Crowdsale } from './contracts';
import { asEtherNumber, asMomentDate } from './utils';

export default async function loadIcoParamsFromContract(address: string) {
  const icoContract = Crowdsale(address);

  const [
    startDate,
    endDate,
    lockedAccountAddress,
    neumarkTokenAddress,
    minCap,
    maxCap,
  ] = await Promise.all([
    icoContract.startDateAsync().then(asMomentDate),
    icoContract.endDateAsync().then(asMomentDate),
    icoContract.lockedAccountAsync(),
    icoContract.neumarkTokenAsync(),
    icoContract.minCapAsync().then(asEtherNumber),
    icoContract.maxCapAsync().then(asEtherNumber),
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
