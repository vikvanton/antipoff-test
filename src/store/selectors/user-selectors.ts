import { TAppState, TUser } from "../../types/types";

export const selectUser = (state: TAppState): TUser | null => state.user.user;

export const selectUserError = (state: TAppState): string => state.user.userError;
