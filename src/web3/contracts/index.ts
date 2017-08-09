import { promisifyAll } from 'bluebird';
import web3 from '../web3Provider';
const CrowdsaleDefinition = require('./Crowdsale.json');
const LockedAccountDefinition = require('./LockedAccount.json');
const NeumarkDefinition = require('./Neumark.json');

type BigNumber = BigNumber.BigNumber;

interface Crowdsale {
  startDateAsync(): Promise<BigNumber>;
  endDateAsync(): Promise<BigNumber>;
  lockedAccountAsync(): Promise<BigNumber>;
  neumarkTokenAsync(): Promise<BigNumber>;
  minCapAsync(): Promise<BigNumber>;
  maxCapAsync(): Promise<BigNumber>;
  commitAsync(params: { value: number, from: string, gas: number }): Promise<{}>
}
export const Crowdsale = (address: String): Crowdsale =>
  <any>promisifyAll(web3.eth.contract(CrowdsaleDefinition.abi).at(address));


interface LockedAccount {
  balanceOfAsync(investorAddress: string): Promise<[BigNumber, BigNumber]>;
  totalInvestorsAsync(): Promise<BigNumber>;
  totalLockedAmountAsync(): Promise<BigNumber>;
}
export const LockedAccount = (address: String): LockedAccount =>
  <any>promisifyAll(web3.eth.contract(LockedAccountDefinition.abi).at(address));

interface Neumark {
  totalSupplyAsync(): Promise<BigNumber>
}
export const Neumark = (address: String): Neumark =>
  <any>promisifyAll(web3.eth.contract(NeumarkDefinition.abi).at(address));

