import {
  ADD_USER, GET_USERS, GET_USERS_LOADING, GET_USERS_ERROR,
} from '../../actions/actionTypes';

const initialState = {
  loading: false,
  usersError: false,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        data: [...state.users, action.payload],
      };
    }
    case GET_USERS: {
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: false,
      };
    }
    case GET_USERS_LOADING: {
      return {
        ...state,
        loading: true,
        usersError: false,
      };
    }
    case GET_USERS_ERROR: {
      return {
        ...state,
        usersError: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}
