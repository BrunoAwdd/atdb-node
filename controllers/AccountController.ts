import { web3 } from "../helpers/web3";

/**
 * Create an Account in selected RCP
 * @param req
 * @param res
 * @return json Account
 */
const createAccount = async (req: any, res: any) => {
    const entropy = req.body.entropy;
    const account = web3.eth.accounts.create([entropy]);
    const encrypt = web3.eth.accounts.encrypt(account.privateKey, 'cheese');

    return res.json( { address: account.address, privateKey: encrypt });
}

/**
 * Load Account
 * @param req
 * @param res
 */
const getAccount = async (req: any, res: any) => {
    const pvtKey = req.body.pvtKey;
    const account = web3.eth.accounts.decrypt(pvtKey, 'cheese');

    return res.json( { account });
}

export const AccountController = {
    createAccount,
    getAccount,
}
