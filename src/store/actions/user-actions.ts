import { getUserRequest } from "../../api/api";
import { IError, TAppThunk, TUser } from "../../types/types";

export const USER_SUCCESS = "USER_SUCCESS";
export const USER_ERROR = "USER_ERROR";

export interface IUserSuccess {
  readonly type: typeof USER_SUCCESS;
  readonly data: TUser;
}

export interface IUserError {
  readonly type: typeof USER_ERROR;
  readonly data: string;
}

export type TUserActions = IUserSuccess | IUserError;

export const getUser = (id: number): TAppThunk => {
  return (dispatch, getState) => {
    const user = getState().users.users.data.find((user: TUser) => user.id === id);
    if (user) dispatch({ type: USER_SUCCESS, data: user });
    else {
      getUserRequest(id)
        .then((result) => {
          dispatch({ type: USER_SUCCESS, data: result.data });
        })
        .catch((error: IError) =>
          dispatch({
            type: USER_ERROR,
            data: error.message,
          })
        );
    }
  };
};
