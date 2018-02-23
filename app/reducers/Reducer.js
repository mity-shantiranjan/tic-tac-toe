import Cells from "./Cells";
import Player from './Player';
import { combineReducers } from "redux";

const TicTacToeApp = combineReducers({Cells, Player});

export default TicTacToeApp;
