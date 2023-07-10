import { TAppState } from "../../types/types";

export const selectAuthRequest = (state: TAppState): boolean => state.auth.authRequest;

export const selectAuthError = (state: TAppState): string => state.auth.authError;

export const selectAuthToken = (state: TAppState): string | null => state.auth.token;
