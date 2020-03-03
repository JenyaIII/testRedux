/* eslint-disable import/prefer-default-export */
import { ADD_USER } from './actionTypes';

export const addUser = (obj) => ({
  type: ADD_USER,
  payload: obj,
});
