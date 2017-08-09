/* global web3*/
import * as Web3 from 'web3';
import * as Bluebird from 'bluebird';


import config from '../config';

let web3Instance;
// Checking if Web3 has been injected by the browser (Mist/MetaMask)
if (typeof web3 !== 'undefined') {
  web3Instance = new Web3(web3.currentProvider);
} else {
  web3Instance = new Web3(new Web3.providers.HttpProvider(config.ethereumNode));
}

export default Bluebird.promisifyAll(web3Instance);
