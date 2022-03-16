const provider = 'https://bsc-dataseed.binance.org/';
const Web3 = require('web3');
let web3_bsc: any;

web3_bsc = (typeof web3_bsc === 'undefined') ? new Web3(provider) : web3_bsc;

export { web3_bsc };
