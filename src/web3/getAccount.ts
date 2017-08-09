import web3 from './web3Provider';

export default () => new Promise((resolve, reject) => {
  web3.eth.getAccounts((error:any, result:any) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      reject(error);
    }
    const publicKey = result[0];
    resolve(publicKey);
  });
});
