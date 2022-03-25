import { web3 } from "./web3";

const nimble = require('../../config/abi/nimble.js');

const abi = nimble.uDonate_abi;
const address = nimble.uDonate_address;

let nimbleContract: any;

nimbleContract = (typeof nimbleContract === 'undefined') ? new web3.eth.Contract(abi, address, { gas: 3000000 }) : nimbleContract;

export { nimbleContract };

