import { combineReducers } from "redux";
import registrazioneReducer from "./registrazioneReducer";
import loginReducer from "./loginReducer";

export const rootReducer = combineReducers({ registrazioneReducer, loginReducer });