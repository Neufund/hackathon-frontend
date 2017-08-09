import { promisifyAll } from 'bluebird';
import web3 from '../web3Provider';
import * as CrowdsaleDefinition from './Crowdsale.json';
import * as LockedAccountDefinition from './LockedAccount.json';
import * as NeumarkDefinition from './Neumark.json';

export const Crowdsale = address =>
  promisifyAll(web3.eth.contract(CrowdsaleDefinition.abi).at(address));

export const LockedAccount = address =>
  promisifyAll(web3.eth.contract(LockedAccountDefinition.abi).at(address));

export const Neumark = address =>
  promisifyAll(web3.eth.contract(NeumarkDefinition.abi).at(address));

