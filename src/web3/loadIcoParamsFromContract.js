import invariant from 'invariant';

export default async function loadIcoParamsFromContract(address) {
  // @todo implement it
  invariant(address, 'Specify adddress!');
  return {
    startDate: '2017-08-02T13:42:07.811Z',
    endDate: '2017-08-10T13:42:07.811Z',
  };
}
