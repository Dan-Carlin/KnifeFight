import { SET_BASE_HP, SET_ENABLE_AUDIO, SET_SHOW_POPUP } from "./actions";

const initialState = {
  baseHp: "25",
  enableAudio: true,
  showPopup: true,
};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BASE_HP:
      return { ...state, baseHp: action.payload };
    case SET_ENABLE_AUDIO:
      return { ...state, enableAudio: action.payload };
    case SET_SHOW_POPUP:
      return { ...state, showPopup: action.payload };
    default:
      return state;
  }
}

export default settingsReducer;
