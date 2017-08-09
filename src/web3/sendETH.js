import * as invariant from 'invariant';
import { routeTo } from 'redux-router-kit';
import web3 from './web3Provider';
import { Crowdsale } from './contracts/index';
import {
  commitingStartedAction,
  commitingTransactionSubmittedAction,
  commitingDoneAction,
  commitingError,
} from '../actions/commitActions';

export default (contractAddress, amount, userAddress) => async (dispatch) => {
  try {
    invariant(amount, 'Specify amount');
    invariant(userAddress, 'Specify userAddress');
    const weiAmmount = web3.toWei(amount, 'ether');

    dispatch(commitingStartedAction());

    const contract = Crowdsale(contractAddress);

    await contract.commitAsync(
      { value: weiAmmount, from: userAddress, gas: 1000000 }
    );
    dispatch(commitingTransactionSubmittedAction());


    const confirmation = web3.eth.filter('latest', async (error) => {
      if (error) {
        return;
      }
      // @todo probably we need to check somehow if block holds our transacation?
      confirmation.stopWatching();

      dispatch(commitingDoneAction());
      dispatch(routeTo('/'));
    });
  } catch (e) {
    dispatch(commitingError(e));
  }
};
