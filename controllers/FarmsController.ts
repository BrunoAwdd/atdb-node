import { FarmInterface } from '../interfaces';
import { web3 } from "../helpers/web3";


/**
 * @param req - The request Params
 * @param res - The response Params
 */
const createFarm = async (req: any, res: any) => {
    const id = req.params.id
}

export const FarmsController = {
    createFarm,
}
