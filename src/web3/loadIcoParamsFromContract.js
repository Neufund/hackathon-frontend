import invariant from 'invariant';
import { Crowdsale } from './contracts';
import { asMomentDate } from './utils';

export default async function loadIcoParamsFromContract(address) {
  invariant(address, 'Specify adddress!');

  const icoContract = Crowdsale(address);

  const [startDate, endDate, lockedAccountAddress, neumarkTokenAddress] = await Promise.all([
    icoContract.startDateAsync().then(asMomentDate),
    icoContract.endDateAsync().then(asMomentDate),
    icoContract.lockedAccountAsync(),
    icoContract.neumarkTokenAsync(),
  ]);

  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    lockedAccountAddress,
    neumarkTokenAddress,
  };
}
