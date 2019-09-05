import { createAction, handleActions } from "redux-actions";

const SET_PANEL = "@@panels/SET_PANELS";

const initialStatePanels = { activePanels: [] };

//--actions--
export const setActivePanel = createAction(SET_PANEL);

//--reducer--
const panels = handleActions(
  {
    [SET_PANEL]: (state, action) => {
      return {
        ...state,
        activePanels: state.activePanels.includes(action.payload)
          ? state.activePanels.filter(item => item !== action.payload)
          : [...state.activePanels, action.payload]
      };
    }
  },
  initialStatePanels
);

export default panels;
