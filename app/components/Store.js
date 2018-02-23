import TicTacToeApp from "../reducers/Reducer";
import { createStore } from "redux";
import logger from "redux-logger";
import { applyMiddleware } from "redux";

let Store = createStore(TicTacToeApp, applyMiddleware(logger));

export default Store;
