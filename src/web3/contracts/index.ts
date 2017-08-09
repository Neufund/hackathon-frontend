import { promisifyAll } from 'bluebird';
import web3 from '../web3Provider';
const CrowdsaleDefinition = require('./Crowdsale.json');
const LockedAccountDefinition = require('./LockedAccount.json');
const NeumarkDefinition = require('./Neumark.json');

export const Crowdsale = (address: String) =>
  promisifyAll(web3.eth.contract(CrowdsaleDefinition.abi).at(address));

export const LockedAccount = (address: String) =>
  promisifyAll(web3.eth.contract(LockedAccountDefinition.abi).at(address));

export const Neumark = (address: String) =>
  promisifyAll(web3.eth.contract(NeumarkDefinition.abi).at(address));

