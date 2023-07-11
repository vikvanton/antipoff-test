import { TAppState, IUser } from "../../types/types";

export const selectUser = (state: TAppState): IUser | null => state.user.user;

export const selectUserError = (state: TAppState): string => state.user.userError;
