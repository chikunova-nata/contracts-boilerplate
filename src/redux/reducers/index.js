import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { history } from "../enhancers/middlewares/router";
import ui from "./ui";
import data from "./data";
// import status from "./status";

export default combineReducers({
    router: connectRouter(history),
    ui,
    data
    // status,
});
