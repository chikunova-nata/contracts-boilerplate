import { STORE_WEB3 } from "./constants";

export const storeWeb3 = web3 => ({
    type: STORE_WEB3,
    web3
});
