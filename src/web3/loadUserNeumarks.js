import invariant from 'invariant';
import Bluebird from 'bluebird';

export default async (address) => {
  // @todo implement it
  invariant(address, 'Specify adddress!');
  await Bluebird.delay(3000); // eslint-disable-line
  return Promise.resolve(345098);
};
