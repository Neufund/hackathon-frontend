import invariant from 'invariant';
import { Crowdsale } from './contracts/index';

export default async (contractAddress, amount, userAddress) => {
  // @todo implement it
  invariant(amount, 'Specify amount');
  invariant(userAddress, 'Specify userAddress');
// eslint-disable-next-line no-console
  console.log(`committing ${amount} ETH from ${userAddress}`);

  const contract = Crowdsale(contractAddress);

  contract.commit(
    { value: amount * (10 ** 18), from: userAddress },
    (err, result) => {
      console.log('transaction');
      console.log(err);
      console.log(result);
    }
  );
};
