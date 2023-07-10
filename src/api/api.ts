import { API } from "../consts/consts";
import { ICustomResponse, IError, TUser, TUsers } from "../types/types";

const checkResponse = <T>(response: Response): Promise<T> => {
  return response.ok
    ? (response as ICustomResponse<T>).json()
    : Promise.reject({ message: "Ошибка получения данных с сервера" });
};

const request = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(endpoint);
    return checkResponse<T>(response);
  } catch (e) {
    throw new Error((e as IError).message);
  }
};

export const getUsersRequest = async (page: number, perPages: number): Promise<TUsers> => {
  return await request<TUsers>(`${API}users?page=${page}&per_page=${perPages}`);
};

export const getUserRequest = async (id: number): Promise<{ data: TUser }> => {
  return await request<{ data: TUser }>(`${API}users/${id}`);
};
