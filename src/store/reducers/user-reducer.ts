import { TUser } from "../../types/types";
import { TUserActions, USER_ERROR, USER_SUCCESS } from "../actions/user-actions";

type TUserState = {
  user: TUser | null;
  userError: string;
};

const initialState: TUserState = {
  user: null,
  userError: "",
};

export const userReducer = (state = initialState, action: TUserActions) => {
  switch (action.type) {
    case USER_SUCCESS: {
      return {
        ...state,
        user: action.data,
      };
    }
    case USER_ERROR: {
      return { ...state, userError: action.data };
    }
    default:
      return state;
  }
};
