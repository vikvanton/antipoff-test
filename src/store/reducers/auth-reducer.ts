import { TAppActions } from "../../types/types";
import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS, CLEAR_AUTH } from "../actions/auth-actions";

type TAuthState = {
  token: string | null;
  authRequest: boolean;
  authError: string;
};

const initialState: TAuthState = {
  token: localStorage.getItem("token") || null,
  authRequest: false,
  authError: "",
};

export const authReducer = (state = initialState, action: TAppActions) => {
  switch (action.type) {
    case AUTH_REQUEST: {
      return { ...state, authRequest: true, authError: "" };
    }
    case AUTH_SUCCESS: {
      localStorage.setItem("token", action.data.token);
      return {
        ...state,
        token: action.data.token,
        authRequest: false,
      };
    }
    case AUTH_ERROR: {
      return { ...state, authRequest: false, authError: action.data };
    }
    case CLEAR_AUTH: {
      localStorage.removeItem("token");
      return { ...state, token: null };
    }
    default:
      return state;
  }
};
