import * as moment from 'moment';
import web3 from './web3Provider';

export function asMomentDate(bignum) {
  const asInt = bignum.toNumber();

  return moment.utc(asInt, 'X');
}

export function asNumber(bignum) {
  return bignum.toNumber();
}

export function asEtherNumber(bignum) {
  return web3.fromWei(bignum, 'ether').toNumber();
}
