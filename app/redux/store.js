import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import settingsReducer from "./reducers";
import diceReducer from "./diceReducers";

const rootReducer = combineReducers({ settingsReducer, diceReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
