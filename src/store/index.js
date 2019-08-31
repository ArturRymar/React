import { createStore } from "redux";
//store
import rootReducer from "store/modules/rootReducer";

const store = createStore(rootReducer);

export default store;
