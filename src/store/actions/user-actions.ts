import { getUserRequest } from "../../api/api";
import { TError, TAppThunk, IUser, ILikedUser } from "../../types/types";

export const USER_SUCCESS = "USER_SUCCESS";
export const USER_ERROR = "USER_ERROR";

export interface IUserSuccess {
  readonly type: typeof USER_SUCCESS;
  readonly data: IUser;
}

export interface IUserError {
  readonly type: typeof USER_ERROR;
  readonly data: string;
}

export type TUserActions = IUserSuccess | IUserError;

/**
 * @param id: number идентификатор пользователя
 * @returns TAppThunk
 * Thunk-ф-ция получения пользователя.
 * Если в store есть список пользователей - ищет там,
 * если нет - делает запрос за пользователем
 */
export const getUser = (id: number): TAppThunk => {
  return (dispatch, getState) => {
    const user = getState().users.users.data.find((user: ILikedUser) => user.id === id);
    if (user) dispatch({ type: USER_SUCCESS, data: user });
    else {
      getUserRequest(id)
        .then((result) => {
          dispatch({ type: USER_SUCCESS, data: result.data });
        })
        .catch((error: TError) =>
          dispatch({
            type: USER_ERROR,
            data: error.message,
          })
        );
    }
  };
};
