import { combineReducers } from "redux";
import { usersReducer } from "./users-reducer";
import { userReducer } from "./user-reducer";
import { authReducer } from "./auth-reducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  auth: authReducer,
});
