/* eslint-disable import/prefer-default-export */
import Axios from 'axios';
import {
  ADD_USER, GET_USERS, GET_USERS_LOADING, GET_USERS_ERROR,
} from './actionTypes';

export const addUser = (obj) => ({
  type: ADD_USER,
  payload: obj,
});

export const getUsers = () => async (dispatch) => {
  // dispatch({ type: GET_USERS_LOADING });
  try {
    const userData = await Axios.get(
      'http://localhost:',
    );
    console.log('USERDATA', userData);
    dispatch({
      type: GET_USERS,
      payload: userData,
    });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

export const getUsersLoading = () => ({
  type: GET_USERS_LOADING,
});

export const getUsersError = () => ({
  type: GET_USERS_ERROR,
  payload: true,
});
