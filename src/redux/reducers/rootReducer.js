import { combineReducers } from "redux";
import { gioHangReducer } from "./gioHangReducer";

export const rootReducer = combineReducers({
  appState: gioHangReducer,
});
