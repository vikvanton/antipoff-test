import { API } from "../consts/consts";
import {
  ICustomResponse,
  TError,
  TErrorResponse,
  TSignUpRequest,
  TSignUpResponse,
  TUser,
  TUsers,
} from "../types/types";

const checkResponse = <T>(response: Response): Promise<T> => {
  return response.ok
    ? (response as ICustomResponse<T>).json()
    : (response as ICustomResponse<TErrorResponse>).json().then(
        (result: TErrorResponse) =>
          Promise.reject({
            message: result.error ? result.error : "Ошибка соединения с сервером",
          }),
        () => Promise.reject({ message: "Ошибка соединения с сервером" })
      );
};

const request = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(endpoint, options);
    return checkResponse<T>(response);
  } catch (e) {
    throw new Error((e as TError).message);
  }
};

export const getUsersRequest = async (page: number, perPages: number): Promise<TUsers> => {
  return await request<TUsers>(`${API}users?page=${page}&per_page=${perPages}`);
};

export const getUserRequest = async (id: number): Promise<{ data: TUser }> => {
  return await request<{ data: TUser }>(`${API}users/${id}`);
};

export const signUpRequest = async (data: TSignUpRequest): Promise<TSignUpResponse> => {
  return await request<TSignUpResponse>(`${API}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
