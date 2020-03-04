import { combineReducers } from 'redux';
import cardsReducer from './cardReducers/cardsReducer';

import { loadState } from '../localStorage';

const persistedState = loadState();

export default combineReducers({
  cardsReducer,
  persistedState,
});
