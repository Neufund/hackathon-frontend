import moment from 'moment';

export function asMomentDate(bignum) {
  const asInt = bignum.toNumber();

  return moment.utc(asInt, 'X');
}

export function asNumber(bignum) {
  return bignum.toNumber();
}
