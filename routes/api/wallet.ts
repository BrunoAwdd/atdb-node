import * as util from "util";
import chalk from 'chalk';

//const FarmController = require('../../controllers/farmController')

// Express Router
var router = require('express').Router();

// Fs
const fs = require('fs');
const web3 = global.web3;
const contract = global.ercContract;
const recharge = 11 * 10**18;

const master = '0xEf33fA1Ff1895f5690537Ca458520Eb94172Ea1A';
const pvt_key = '0x2eb0baaf539874c9283d519f5b0863884bc118c3ecf8f9ba521a50e352e0c0c0';

const log = console.log;

router.get('/', async function(req: any, res: any, next: any) {
/*
    const readFilePromise = util.promisify(fs.readFile);
    const encrypt = await readFilePromise('./keyfile.json')
        .then((data: string) => JSON.parse(data))
        .catch(log)

    await web3.eth.accounts.wallet.decrypt(encrypt, 'buluscO1013a');
    const acc = await web3.eth.accounts.wallet;
    let accounts: any[] = [];

    for(let i = 0; i < acc.length; i++) {
        log(acc[i]);
        accounts.push(acc[i]);
    }*/

    return res.json( {create: 'create'});
});

router.post('/create', async function(req: any, res: any, next: any) {
    web3.eth.accounts.wallet.create(10, '0xEf33fA1Ff1895f5690537Ca458520Eb94172Ea1A');
    const encrypt = web3.eth.accounts.wallet.encrypt('buluscO1013a');

    //create a file named mynewfile3.txt:
    fs.writeFile('keyfile.json',  JSON.stringify(encrypt), function (err: any) {
        if (err) throw err;
        log('Saved!');
    });

    return res.json( {delta: '2'});
});

//router.get('/test/:id', FarmController.createFarm);

router.get('/recharge/:farm', async function(req: any, res: any, next: any) {
    const farm = req.params.farm;
    await web3.eth.accounts.wallet.add(pvt_key);

    let totalBalance = 0.0;
    let accounts;

    if (farm === 'all') {
        accounts =  [
            ...require('../../config/accounts/1.js'),
            ...require('../../config/accounts/2.js'),
            ...require('../../config/accounts/3.js'),
            ...require('../../config/accounts/4.js'),
            ...require('../../config/accounts/5.js'),
            ...require('../../config/accounts/6.js'),

        ];
    } else {
        accounts = require('../../config/accounts/' + farm + '.js');
    }

    for (let i = 0; i < 10; i++) {
        let balance = await getBalance(accounts[i]);
        if (balance < recharge) {
            await sendVLX(accounts[i], recharge - balance);
            totalBalance += +balance;
        }

    }

    return res.json( { recharge: (totalBalance / 10**18) });
});

router.get('/harvest/:farm', async function(req: any, res: any, next: any) {
    const farm = req.params.farm;
    let totalBalance = 0.0;
    await decrypt(farm);

    const accounts = web3.eth.accounts.wallet;

    for (let i = 0; i < 10; i++) {
        let balance = await balanceOfWagyu(accounts[i].address);
        if (balance > 10**18) {
            await transferFrom(accounts[i].address, balance);
            totalBalance += +balance;
        }

    }

    return res.json( { harvested: (totalBalance / 10**18) });
});

router.get('/amount/:farm', async function(req: any, res: any, next: any) {
    const total = {date: '', totalVelas: 0, totalWagyu: 0, farms: []};
    const farm = req.params.farm;
    let accTotal = 0.0;
    let accTotalWagyu = 0.0;

    let accounts = getAccounts(farm)
    const date = new Date();
    date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

    if (farm == 'all') {
        for (let i = 1; i < 11; i ++) {
            const f = await result(i);
            total.totalWagyu += f.totalWagyu;
            total.totalVelas += f.totalVelas;
            // @ts-ignore
            total.farms.push(f);
        }
    } else{
        const f = await result(farm);
        total.totalWagyu += f.totalWagyu;
        total.totalVelas += f.totalVelas;
        // @ts-ignore
        total.farms.push(f);
    }
    total.date = `${date}`;

/*
    for(const [index, account] of accounts.entries()) {
        const accParcial = +await getBalance(account) / 10**18;
        const accParcialWaygu = +await balanceOfWagyu(account) / 10**18;

        log(chalk.black.bgWhite(index), chalk.black.bgWhite(account));

        log(index % 10 == 0);

        accTotal = +accTotal + accParcial;
        accTotalWagyu = +accTotalWagyu + accParcialWaygu;
        // @ts-ignore
        total.accounts.push({id:index, account: account, velas: accParcial, wagyu: accParcialWaygu});
    }

    total.date = `${date}`;
    total.totalVelas = accTotal;
    total.totalWagyu = accTotalWagyu;
*/
    /*
    fs.writeFile(
        'amount/' + farm + '/' + date.toISOString().slice(0, 10) + '.json',
        JSON.stringify(total),
        function (err: any) {
            if (err) throw err;
            log('Saved!');
        }
    );*/

    log(total);
    return res.json(total);
});

module.exports = router;

async function getBalance(account_: string) {
    let bal = 0;
    try {
        await web3.eth.getBalance(account_, (err: any, balance: number) => {
            const address = account_;
            bal = balance;
            if (!err) {
                const retVal = {address, balance};
                log(chalk.white.bgYellow.bold('Velas:', balance / 10**18));
            } else {
                log(err);
                //throw ({account: 'error', balance: 0});
            }
        });
    }
    catch (e) {
        log(e);
        log('Provided address "undefined"');
    }
    return bal;
}

async function balanceOfWagyu(account: any) {
    return await contract.methods
        .balanceOf(account)
        .call({ from: account })
        .then((data: any) => {
            log(chalk.white.bgRed.bold('Wagyu:', data / 10**18));
            return data;
        })
        .catch(log);
}

async function transferFrom(account:any, balance:any) {
    log(account, balance);
    return contract.methods
        .transfer(master, balance)
        .send({ from: account })
        .then((data: any) => {
            log(data);
            return data;
        })
        .catch(async (error: any) => {
            log(error);
            await transferFrom(account, balance);
        });
}

async function decrypt(name: string) {
    web3.eth.accounts.wallet.clear();

    const keyfile = require('../../config/keyfiles/' + name + '.json');
    web3.eth.accounts.wallet.decrypt(keyfile, 'buluscO1013a');

    return web3
}

async function sendVLX(to: string, amount: number) {
    const value = Math.ceil(amount/10**18)
    log('Value:', value, amount/10**18, master);

    log(to, master, value.toString())

    await web3.eth
        .sendTransaction({to:to, from: master, value: web3.utils.toWei(value.toString(), 'ether'), gas: 63000 }, async (error: any, hash: any) =>{
            log(error, hash);
        })
        .then((data: any) => {
            log(data);
        })
        .catch((error: any) => {
            log(error);
        })
}

const getAccounts = (farm: any) => {
    let accounts = [];

    if (farm === 'all') {
        accounts =  [
            ...require('../../config/accounts/1.js'),
            ...require('../../config/accounts/2.js'),
            ...require('../../config/accounts/3.js'),
            ...require('../../config/accounts/4.js'),
            ...require('../../config/accounts/5.js'),
            ...require('../../config/accounts/6.js'),
            ...require('../../config/accounts/7.js'),
            ...require('../../config/accounts/8.js'),
            ...require('../../config/accounts/9.js'),
            ...require('../../config/accounts/10.js')
        ];
    } else {
        accounts = require('../../config/accounts/' + farm + '.js');
    }

    return accounts;
}


const result = async (farm: number)  => {
    let accTotal = 0.0;
    let accTotalWagyu = 0.0;
    const total = {date: '', totalVelas: 0, totalWagyu: 0, accounts:[]};

    const accounts = getAccounts(farm);

    const date = new Date();
    date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

    for(const [index, account] of accounts.entries()) {
        const accParcial = +await getBalance(account) / 10**18;
        const accParcialWaygu = +await balanceOfWagyu(account) / 10**18;

        log(chalk.black.bgWhite(((farm-1)*10 + index)), chalk.black.bgWhite(account));

        accTotal = +accTotal + accParcial;
        accTotalWagyu = +accTotalWagyu + accParcialWaygu;
        // @ts-ignore
        total.accounts.push({id: ((farm-1)*10 + index), account: account, velas: accParcial, wagyu: accParcialWaygu, date: date});
    }

    total.date = `${date}`;
    total.totalVelas = accTotal;
    total.totalWagyu = accTotalWagyu;

    console.log(total);

    return total;
}
