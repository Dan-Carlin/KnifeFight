import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import settingsReducer from "./reducers";

const rootReducer = combineReducers({ settingsReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
