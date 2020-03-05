import {
  ADD_USER,
  GET_USERS,
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  DELETE_USER,
  CHANGE_MODAL,
  EDIT_FORM,
  UPDATE_USER,
} from '../../actions/actionTypes';

const initialState = {
  loading: false,
  modalOpen: false,
  editForm: false,
  data: [],
  currentUser: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case GET_USERS: {
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        loading: false,
      };
    }
    case GET_USERS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_USERS_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        data: [
          ...state.data.filter((item) => item.id !== action.payload.id),
        ],
      };
    }
    case CHANGE_MODAL: {
      return {
        ...state,
        modalOpen: action.payload,
      };
    }
    case UPDATE_USER: {
      return {
        ...state,
        currentUser: [
          ...state.currentUser, ...action.payload,
        ],
        editForm: false,
        modalOpen: false,
      };
    }
    case EDIT_FORM: {
      return {
        ...state,
        editForm: true,
        modalOpen: true,
      };
    }
    default:
      return state;
  }
}
