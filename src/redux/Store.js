import { applyMiddleware, legacy_createStore } from "redux";
import myReducer from "./Reducer";
import logger from "redux-logger";

const myStore = legacy_createStore(myReducer,applyMiddleware(logger));

export default myStore

