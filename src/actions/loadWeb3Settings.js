import web3Provider from '../web3/web3Provider';
import { LOAD_DEFAULT_ACCOUNT } from './constants';

export const loadDefaultAccountAction = accountAddress => ({
  type: LOAD_DEFAULT_ACCOUNT,
  payload: accountAddress,
});

export function loadWeb3Settings(dispatch) {
  const defaultAccount = web3Provider.eth.defaultAccount; // @todo: how to check if it changed?

  dispatch(loadDefaultAccountAction(defaultAccount || null));
}
