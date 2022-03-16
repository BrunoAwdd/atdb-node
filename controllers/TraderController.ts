import { PairInterface } from "../interfaces";
import { erc, pancakeFactory, pancakeRouter } from "../helpers/web3/pancake";
import { web3_bsc } from '../helpers/web3'

const dataMock = {
    input: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    output: '0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205',
    amount: 1,
    slippage: 0.01
}


const createCoin = async (req: any, res: any) => {
    await web3_bsc.eth.accounts.wallet.add(process.env.PVT_KEY);
    const pair: PairInterface = await getPair(dataMock.input, dataMock.output);
    const router = await getAmountsOut(pair, dataMock.amount);
    const liq =  await checkLiq(pair);

    return res.json( { pair: pair, amount:  router, liquidity: liq});
}

/**
 * Get the pair in pancakeFactory
 * to token in and out
 *
 * @param input {string}
 * @param output {string}
 * @return Promise<string>
 */
const getPair = async (input: string, output: string): Promise<PairInterface> => {
    const account = web3_bsc.eth.accounts[0];

    return pancakeFactory.methods
        .getPair(input, output)
        .call({from: account})
        .then((pair: any) => {
            return { input, output, pair }
        })
        .catch((error: any) => {
            console.log('Catch', error);
        });
}

/**
 * Check liquidity of Contract
 *
 * @param pair {PairInterface}
 * @return Promise<number> with the liquidity in ETH(BNB, MATIC, VELAS)
 */
const checkLiq = async (pair: PairInterface): Promise<number> => {
    const account = web3_bsc.eth.accounts[0];
    const ercContract: any = await erc(pair.output);

    return ercContract.methods
        .balanceOf(pair.pair)
        .call({from: account})
        .then((liq: any) => {
            return liq;
        })
        .catch((error: any) => {
            console.log('Catch', error);
        });
}

/**
 * Get the amount token out for token in
 *
 * @param pair {PairInterface} [input, output]
 * @param amount {number}
 * @return Promise<number[]> (With input, and output price)
 */
const getAmountsOut = async (pair: PairInterface, amount: number): Promise<number[]> => {
    const account = web3_bsc.eth.accounts[0]

    return pancakeRouter.methods
        .getAmountsOut(amount, [pair.input, pair.output])
        .call({from: account})
        .then((data: any) => {
            console.log(data);
            return data
        })
        .catch((error: any) => {
            console.log('Catch', error);
        });

}


const swapExactETHForTokens = async () => {
    const account = web3_bsc.eth.accounts[0];

    return pancakeRouter.methods
        .swapExactETHForTokens(
            // amountMin, getAmountOut
            // path, [tokenIn, tokenOut]
            // to, our account
            // deadline, Date.now() + 1000 * 60 * 5
        )
        .send({from: account})
        .then((data: any) => {
            console.log(data);
            return data
        })
        .catch((error: any) => {
            console.log('Catch', error);
        });
}



export const TraderController = {
    createCoin,

}
