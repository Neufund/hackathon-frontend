import sendETH from '../web3/sendETH';

// eslint-disable-next-line no-unused-vars,import/prefer-default-export
export const commitETH = (ammount, userAddress) => async (dispatch) => {
  sendETH(ammount, userAddress);
};
