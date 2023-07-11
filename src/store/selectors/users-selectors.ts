import { TAppState, ILikedUser } from "../../types/types";

export const selectUsersRequest = (state: TAppState): boolean => state.users.usersRequest;

export const selectUsersError = (state: TAppState): string => state.users.usersError;

export const selectUsers = (state: TAppState): Array<ILikedUser> => state.users.users.data;

export const selectPage = (state: TAppState): number => state.users.users.page;

export const selectTotalPages = (state: TAppState): number => state.users.users.total_pages;
