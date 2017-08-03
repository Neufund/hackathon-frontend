import sendETH from '../web3/sendETH';
import { selectAddress } from '../reducers/icoParameters';

// eslint-disable-next-line no-unused-vars,import/prefer-default-export
export const commitETH = (ammount, userAddress) => async (dispatch, getState) => {
  const state = getState();
  const address = selectAddress(state.icoParameters);
  sendETH(address, ammount, userAddress);
};
