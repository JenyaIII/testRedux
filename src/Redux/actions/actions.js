/* eslint-disable import/prefer-default-export */
import Axios from 'axios';
import {
  ADD_USER,
  GET_USERS,
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  DELETE_USER,
  CHANGE_MODAL,
  EDIT_FORM,
  UPDATE_USER,
} from './actionTypes';

export const addUser = (obj) => async (dispatch) => {
  try {
    await Axios.post(
      'http://localhost:5000/users', obj,
    );
    dispatch({
      type: ADD_USER,
      payload: obj,
    });
  } catch (err) {
    dispatch({ type: GET_USERS_ERROR, payload: err });
    console.log(`Error: ${err}`);
  }
};

export const getUsers = () => async (dispatch) => {
  // dispatch({ type: GET_USERS_LOADING });
  try {
    const userData = await Axios.get(
      'http://localhost:5000/users',
    );
    console.log('USERDATA', userData);
    dispatch({
      type: GET_USERS,
      payload: userData,
    });
  } catch (err) {
    dispatch({ type: GET_USERS_ERROR, payload: err });
    console.log(`Error: ${err}`);
  }
};

export const getUsersLoading = () => ({
  type: GET_USERS_LOADING,
});

export const deleteUser = (id, obj) => async (dispatch) => {
  try {
    await Axios.delete(
      `http://localhost:5000/users/${id}`,
    );
    dispatch({
      type: DELETE_USER,
      payload: obj,
    });
  } catch (err) {
    dispatch({ type: GET_USERS_ERROR, payload: err });
    console.log(`Error: ${err}`);
  }
};

export const openOrCloseModal = (bool) => ({
  type: CHANGE_MODAL,
  payload: bool,
});

export const editFormOpen = () => ({
  type: EDIT_FORM,
});

export const editUser = (item) => ({
  type: UPDATE_USER,
  payload: item,
});
