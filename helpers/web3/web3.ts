const provider = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
const Web3 = require('web3');
let web3: any;

web3 = (typeof web3 === 'undefined') ? new Web3(provider) : web3;

export { web3 };
