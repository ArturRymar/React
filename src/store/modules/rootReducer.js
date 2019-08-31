import { combineReducers } from "redux";
//reducers
import tabs from "store/modules/tabs";
import panels from "store/modules/panels";

const rootReducer = combineReducers({ tabs, panels });

export default rootReducer;
