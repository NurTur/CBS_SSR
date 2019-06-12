import { combineReducers } from "redux";
import Global from "./global";
import Entity from "./entity";
import Filter from "./filter";
import Comments from "./comments";
import Dogs from "./dogs";

const rootReducer = combineReducers({ Global,Entity,Filter,Dogs,Comments });
export default rootReducer;