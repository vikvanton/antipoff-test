import { TError, TAppThunk, IUsers } from "../../types/types";
import { getUsersRequest } from "../../api/api";

export const USERS_REQUEST = "USERS_REQUEST";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_ERROR = "USERS_ERROR";
export const USERS_LIKE = "USERS_LIKE";

export interface IUsersRequest {
  readonly type: typeof USERS_REQUEST;
}

export interface IUsersSuccess {
  readonly type: typeof USERS_SUCCESS;
  readonly data: IUsers;
}

export interface IUsersError {
  readonly type: typeof USERS_ERROR;
  readonly data: string;
}

// Тип экшена установки/сброса лайка
// Принимает id пользователя в качетсве data
export interface IUsersLike {
  readonly type: typeof USERS_LIKE;
  readonly data: number;
}

export type TUsersActions = IUsersRequest | IUsersSuccess | IUsersError | IUsersLike;

/**
 * @param page: number номер страницы
 * @param perPages: number кол-во на странице
 * @returns TAppThunk
 * Тhunk-ф-ция получения постраничного списка пользователей.
 */
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
