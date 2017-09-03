import { LockedAccount } from "./contracts";

export default async (investorAddress: string, lockedAccountAddress: string) => {
  const lockedAccount = LockedAccount(lockedAccountAddress);

  const [wei, neumark] = await lockedAccount.balanceOfAsync(investorAddress);

  return { neumarkAmmount: neumark.toNumber(), weiAmmount: wei.toNumber() };
};
