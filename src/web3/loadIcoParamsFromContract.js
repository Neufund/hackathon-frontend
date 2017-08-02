import invariant from 'invariant';
import Bluebird from 'bluebird';

export default async function loadIcoParamsFromContract(address) {
  // @todo implement it
  invariant(address, 'Specify adddress!');

  await Bluebird.delay(2000);

  return {
    startDate: '2017-08-01T13:42:07.811Z',
    endDate: '2017-08-01T13:42:07.811Z',
  };
}
