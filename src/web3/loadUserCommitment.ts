import LockedAccount from "./contracts/LockedAccount";
import web3 from "./web3Provider";

export default async (investorAddress: string, lockedAccountAddress: string) => {
  const lockedAccount = await LockedAccount.createAndValidate(web3, lockedAccountAddress);

  const [wei, neumark] = await lockedAccount.balanceOf(investorAddress);

  return { neumarkAmmount: neumark.toNumber(), weiAmmount: wei.toNumber() };
};
