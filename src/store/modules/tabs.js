import { createAction, handleActions } from "redux-actions";
//constants
import { tabButtons } from "constants/Tabs/Item/tabItem";

const SET_TAB = "SET_TAB";

const initialStateTabs = { activeTab: tabButtons.first };

//--actions--
export const setActiveTabs = createAction(SET_TAB);

//--reducer--
const tabs = handleActions(
  {
    [SET_TAB]: (state, action) => ({
      ...state,
      activeTab: action.payload
    })
  },
  initialStateTabs
);
export default tabs;
