import { combineReducers } from "redux";
import Global from "./global";
import Entity from "./entity";

const rootReducer = combineReducers({ Global,Entity });
export default rootReducer;