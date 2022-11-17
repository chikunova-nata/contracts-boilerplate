import Web3 from "web3";
import axios from "axios";

const endpoint = process.env.REACT_APP_MAINET_ENDPOINT;

export function setWeb3() {
    return new Promise((resolve, reject) => {
        const web3 = new Web3(
            Web3.givenProvider ||
                new Web3.providers.WebsocketProvider(endpoint),
            null,
            {}
        );
        resolve(web3);
    });
}

export function logNetwork(netId) {
    switch (netId) {
        case 1:
            return "main net";
        case 3:
            return "Ropsten";
        case 4:
            return "Rinkeby";
        case 5:
            return "Goerli";
        case 42:
            return "Kovan";
        default:
            return "Ethereum network";
    }
}

export function getContract(web3, address) {
    const key = process.env.REACT_APP_ETHSCAN_KEY;
    return axios
        .get(
            `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${key}`
        )
        .then(({ data: { result } }) => {
            const abi = JSON.parse(result);
            const contract = web3.eth.Contract(abi, address);
            return contract;
        });
}
