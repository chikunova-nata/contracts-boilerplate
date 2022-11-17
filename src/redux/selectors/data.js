// Libs
import { createSelector } from "reselect";

export const web3 = state => state.data.web3;

export const web3Instance = createSelector(web3);
