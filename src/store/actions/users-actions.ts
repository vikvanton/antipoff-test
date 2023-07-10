import { TError, TAppThunk, TUsers } from "../../types/types";
import { getUsersRequest } from "../../api/api";

export const USERS_REQUEST = "USERS_REQUEST";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_ERROR = "USERS_ERROR";

export interface IUsersRequest {
  readonly type: typeof USERS_REQUEST;
}

export interface IUsersSuccess {
  readonly type: typeof USERS_SUCCESS;
  readonly data: TUsers;
}

export interface IUsersError {
  readonly type: typeof USERS_ERROR;
  readonly data: string;
}

export type TUsersActions = IUsersRequest | IUsersSuccess | IUsersError;

export const getUsers = (page = 1, perPages = 8): TAppThunk => {
  return (dispatch) => {
    dispatch({ type: USERS_REQUEST });
    getUsersRequest(page, perPages)
      .then((result) => {
        dispatch({ type: USERS_SUCCESS, data: result });
      })
      .catch((error: TError) =>
        dispatch({
          type: USERS_ERROR,
          data: error.message,
        })
      );
  };
};
