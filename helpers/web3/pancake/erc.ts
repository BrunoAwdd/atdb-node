import { web3_bsc } from "../web3-bsc";

const abi = [{"constant": true,"inputs": [{"name": "_owner","type": "address"}],"name": "balanceOf","outputs": [{"name": "balance","type": "uint256"}],"payable": false,"type": "function"}];

export const erc = async (contract: string) => {
    return new web3_bsc.eth.Contract(abi, contract, { gas: 3000000 });
}
