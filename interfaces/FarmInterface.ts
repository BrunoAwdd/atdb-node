export interface FarmInterface {
    _id?: number;
    id: string;
    cypher: string;
    totalVelas: number;
    totalWagyu: number;
    totalHarvested: number;
    totalRecharged: number;
    amountAt: Date;
    rechargedAt: Date;
    harvestedAt: Date;
}
