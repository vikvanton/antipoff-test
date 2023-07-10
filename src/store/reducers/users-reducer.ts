import { TUsers } from "../../types/types";
import { TUsersActions, USERS_ERROR, USERS_REQUEST, USERS_SUCCESS } from "../actions/users-actions";

type TUsersState = {
  users: TUsers;
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
            action.data.page === 1 ? action.data.data : [...state.users.data, ...action.data.data],
        },
        usersRequest: false,
      };
    }
    case USERS_ERROR: {
      return { ...state, usersRequest: false, usersError: action.data };
    }
    default:
      return state;
  }
};
