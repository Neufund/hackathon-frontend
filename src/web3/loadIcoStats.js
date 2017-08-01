import invariant from 'invariant';

export default async function loadIcoStats(address) {
  // @todo implement it
  invariant(address, 'Specify adddress!');
  return {
    neuMarkAmount: parseInt(Math.random() * 10, 10),
  };
}
