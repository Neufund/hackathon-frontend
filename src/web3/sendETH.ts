import { ThunkAction } from 'redux-thunk';
import { routeTo } from 'redux-router-kit';
import web3 from './web3Provider';
import { Crowdsale } from './contracts/index';
import {
  commitingStartedAction,
  commitingTransactionSubmittedAction,
  commitingDoneAction,
  commitingError,
} from '../actions/commitActions';

export default function (contractAddress: string, amount: number, userAddress:string): ThunkAction<any, any, any> {  // @todo improve it
  return async (dispatch) => {
    try {
      const weiAmmount = web3.toWei(amount, 'ether');

      dispatch(commitingStartedAction());

      const contract = Crowdsale(contractAddress);

      await contract.commitAsync(
        { value: weiAmmount, from: userAddress, gas: 1000000 }
      );
      dispatch(commitingTransactionSubmittedAction());


      const confirmation = web3.eth.filter('latest', async (error: any) => {
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
}