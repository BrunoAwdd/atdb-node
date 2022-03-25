const provider = 'https://bsc-dataseed.binance.org/';
const Web3 = require('web3');
let web3: any;

web3 = (typeof web3 === 'undefined') ? new Web3(provider) : web3;

export { web3 };
