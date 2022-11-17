import { STORE_WEB3 } from "../../actions/constants";

const initialState = {
    web3: {}
};

export default function web3State(state = initialState, { type, web3 }) {
    switch (type) {
        case STORE_WEB3:
            return {
                ...state,
                web3
            };
        default:
            return state;
    }
}
