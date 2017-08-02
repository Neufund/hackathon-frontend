import invariant from 'invariant';

export default async (ammount) => {
  // @todo implement it
  invariant(ammount, 'Specify ammount');
// eslint-disable-next-line no-console
  console.log(`commiting ${ammount} ETH`);
};
