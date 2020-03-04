import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './index.css';
import App from './App';

import { saveState } from './Redux/localStorage';

store.subscribe(() => {
  saveState({
    users: store.getState(),
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
