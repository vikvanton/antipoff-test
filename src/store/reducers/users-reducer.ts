import { ILikedUser, ILikedUsers, IUser } from "../../types/types";
import {
  TUsersActions,
  USERS_ERROR,
  USERS_LIKE,
  USERS_REQUEST,
  USERS_SUCCESS,
} from "../actions/users-actions";

type TUsersState = {
  users: ILikedUsers;
  usersRequest: boolean;
  usersError: string;
};

const initialState: TUsersState = {
  users: {
    page: 1,
    per_page: 8,
    total: 0,
    total_pages: 0,
    data: [],
  },
  usersRequest: false,
  usersError: "",
};

export const usersReducer = (state = initialState, action: TUsersActions) => {
  switch (action.type) {
    case USERS_REQUEST: {
      return { ...state, usersRequest: true, usersError: "" };
    }
    case USERS_SUCCESS: {
      return {
        ...state,
        users: {
          page: action.data.page,
          per_page: action.data.per_page,
          total: action.data.total,
          total_pages: action.data.total_pages,
          data:
            action.data.page === 1
              ? // Преобразование полученного массива пользователей - добавление
                // поля liked каждому объекту
                addLike(action.data.data)
              : [...state.users.data, ...addLike(action.data.data)],
        },
        usersRequest: false,
      };
    }
    case USERS_ERROR: {
      return { ...state, usersRequest: false, usersError: action.data };
    }
    // Обработка экшена установки/сброса лайка
    case USERS_LIKE: {
      return {
        ...state,
        users: {
          ...state.users,
          data: state.users.data.map((user) => {
            if (user.id === action.data) {
              // Сохранение изменений в local storage
              localStorage.setItem(String(action.data), JSON.stringify(!user.liked));
              return {
                ...user,
                liked: !user.liked,
              };
            } else return user;
          }),
        },
      };
    }
    default:
      return state;
  }
};

/**
 * @param users: IUser[]
 * @returns ILikedUser[]
 * Ф-ция, добавляющая поле liked объектам передаваемого массива IUser[].
 * Ищет в local storage сохраненный по ключу id пользователя значение лайка
 * Если лайк был сохранен, берет его значение и устанавливает в liked,
 * иначе liked устанавливается в false
 */
const addLike = (users: Array<IUser>): Array<ILikedUser> => {
  const result = users.map((user: IUser) => {
    const liked = localStorage.getItem(String(user.id));
    return { ...user, liked: liked ? (JSON.parse(liked) as boolean) : false };
  });

  return result;
};
