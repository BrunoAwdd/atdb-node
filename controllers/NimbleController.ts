import { nimbleContract } from "../helpers/web3";

/**
 * Get if the account is whitelisted for the token
 * ex: http://localhost:3500/api/nimble/0xc673643d7f575bbf299079c2c257ca06aa32386866c93213f693e03a6f813c64/0xEf33fA1Ff1895f5690537Ca458520Eb94172Ea1A
 * @param req
 * @param res
 */
const isWhitelisted = async (req: any, res: any) => {
    const token = req.params.token;
    const account = req.params.account;

    let permission = 0;

    await nimbleContract.methods.getWhitelist(token, account).call()
        .then((data: any) =>
            permission = data
        )
        .catch((error: any) => console.log(error));

    return res.json( { permission: permission });
}

export const NimbleController = {
    isWhitelisted,
}
