import * as moment from 'moment';
import web3 from './web3Provider';

export function asMomentDate(bignum: BigNumber.BigNumber) {
  const asInt = bignum.toNumber();

  return moment.utc(asInt, 'X');
}

export function asNumber(bignum: BigNumber.BigNumber) {
  return bignum.toNumber();
}

export function asEtherNumber(bignum: BigNumber.BigNumber) {
  return web3.fromWei(bignum, 'ether').toNumber();
}
