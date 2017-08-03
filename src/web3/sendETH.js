import invariant from 'invariant';

export default async (ammount, userAddress) => {
  // @todo implement it
  invariant(ammount, 'Specify ammount');
  invariant(userAddress, 'Specify userAddress');
// eslint-disable-next-line no-console
  console.log(`commiting ${ammount} ETH from ${userAddress}`);
};
