import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TUsersActions } from "../store/actions/users-actions";
import { store } from "../store/store";
import { TUserActions } from "../store/actions/user-actions";

export type TUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export interface TUsers {
  per_page: number;
  total: number;
  page: number;
  total_pages: number;
  data: Array<TUser>;
}

export interface ICustomResponse<T> extends Response {
  json(): Promise<T>;
}

export interface IError {
  message: string;
}

export type TAppActions = TUsersActions | TUserActions;

export type TAppState = ReturnType<typeof store.getState>;

export type TAppThunk<TReturn = void> = ThunkAction<TReturn, TAppState, unknown, TAppActions>;

export type TAppDispatch = ThunkDispatch<TAppState, unknown, TAppActions>;
