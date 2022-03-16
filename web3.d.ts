declare global {
    namespace NodeJS {
        interface Global {
            web3: any;
        }
    }
}

export default global;
