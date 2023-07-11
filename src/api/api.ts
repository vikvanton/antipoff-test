import { API } from "../consts/consts";
import {
  ICustomResponse,
  TError,
  TErrorResponse,
  TSignUpRequest,
  TSignUpResponse,
  IUser,
  IUsers,
} from "../types/types";

/**
 * @param response: Response
 * @returns Promise<T>
 * Ф-ция проверки ответа на запрос.
 * Возвращает промис, результат которого - объект переданного дженерик-типа T
 */
const checkResponse = <T>(response: Response): Promise<T> => {
  return response.ok
    ? // Если ответ успешен, парсим json в объект типа T
      (response as ICustomResponse<T>).json()
    : // Если нет, пробуем распарсить ответ
      (response as ICustomResponse<TErrorResponse>).json().then(
        // Если успешно, и есть сообщение об ошибке от сервера, возвращаем отклоненый промис с ним,
        // иначе - со стандартной ошибкой
        (result: TErrorResponse) =>
          Promise.reject({
            message: result.error ? result.error : "Ошибка соединения с сервером",
          }),
        // Если json'а ответа об ошибке нет, возвращаем отклоненый промис со стандартной ошибкой
        () => Promise.reject({ message: "Ошибка соединения с сервером" })
      );
};

/**
 * @param endpoint string
 * @param options? RequestInit
 * @returns Promise<T>
 * Ф-ция запроса на сервер.
 * Принимает эндпоинт и опции запроса.
 * Возвращает разрешенный промис с ответом или отклоненный с ошибкой.
 */
const request = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(endpoint, options);
    return checkResponse<T>(response);
  } catch (e) {
    throw new Error((e as TError).message);
  }
};

export const getUsersRequest = async (page: number, perPages: number): Promise<IUsers> => {
  return await request<IUsers>(`${API}users?page=${page}&per_page=${perPages}`);
};

export const getUserRequest = async (id: number): Promise<{ data: IUser }> => {
  return await request<{ data: IUser }>(`${API}users/${id}`);
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
