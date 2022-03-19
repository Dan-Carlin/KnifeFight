import { SET_D6_LOCK, SET_D8_LOCK, SET_D10_LOCK } from "./diceActions";

const initialState = {
  d6IsLocked: false,
  d8IsLocked: false,
  d10IsLocked: false,
};

function diceReducer(state = initialState, action) {
  switch (action.type) {
    case SET_D6_LOCK:
      return { ...state, d6IsLocked: action.payload };
    case SET_D8_LOCK:
      return { ...state, d8IsLocked: action.payload };
    case SET_D10_LOCK:
      return { ...state, d10IsLocked: action.payload };
    default:
      return state;
  }
}

export default diceReducer;
