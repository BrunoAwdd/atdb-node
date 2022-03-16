import { web3 } from "./web3";

const nimble = require('../../config/abi/nimble.js');

const abi = nimble.uDonate_abi;
const wagyuAddress = nimble.uDonate_address;

console.log(nimble.uDonate_address);

let nimbleContract: any;

nimbleContract = (typeof nimbleContract === 'undefined') ? new web3.eth.Contract(abi, wagyuAddress, { gas: 3000000 }) : nimbleContract;

export { nimbleContract };

