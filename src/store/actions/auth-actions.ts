import { signUpRequest } from "../../api/api";
import { TAppThunk, TError, TSignUpRequest, TSignUpResponse } from "../../types/types";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const CLEAR_AUTH = "CLEAR_AUTH";

export interface IAuthRequest {
  readonly type: typeof AUTH_REQUEST;
}

export interface IAuthSuccess {
  readonly type: typeof AUTH_SUCCESS;
  readonly data: TSignUpResponse;
}

export interface IAuthError {
  readonly type: typeof AUTH_ERROR;
  readonly data: string;
}

export interface IClearAuth {
  readonly type: typeof CLEAR_AUTH;
}

export type TAuthActions = IAuthRequest | IAuthSuccess | IAuthError | IClearAuth;

export const getAuth = (data: TSignUpRequest): TAppThunk => {
  return (dispatch) => {
    dispatch({ type: AUTH_REQUEST });
    signUpRequest(data)
      .then((result) => {
        dispatch({ type: AUTH_SUCCESS, data: result });
      })
      .catch((error: TError) =>
        dispatch({
          type: AUTH_ERROR,
          data: error.message,
        })
      );
  };
};
