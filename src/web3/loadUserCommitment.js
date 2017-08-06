import invariant from 'invariant';
import { LockedAccount } from './contracts';

export default async (investorAddress, lockedAccountAddress) => {
  invariant(investorAddress, 'Specify adddress!');

  const lockedAccount = LockedAccount(lockedAccountAddress);

  const [wei, neumark] = await lockedAccount.balanceOfAsync(investorAddress);

  // console.log('wei commited', wei.toNumber()); // wei comitted
  // console.log('neumarls', neumark.toNumber()); // neumarks

  return { neumarkAmmount: neumark.toNumber(), weiAmmount: wei.toNumber() };
};
