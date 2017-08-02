import invariant from 'invariant';

export default async function loadIcoStats(address) {
  // @todo implement it
  invariant(address, 'Specify adddress!');
  return {
    raised: 1000000,
    investorNumber: 1000000,
    neuMarkAmount: 1000000,
    neuMarkToEtherRatio: 1000000,
  };
}
