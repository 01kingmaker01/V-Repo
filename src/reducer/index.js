import { combineReducers } from "redux";
import { postsReducer } from "./posts";
// import { userReducer } from "./user";
export const reducers = combineReducers({
  postsReducer,
});
