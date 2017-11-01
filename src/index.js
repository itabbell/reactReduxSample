import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer';
import './index.css';

const initialState = {
  number: 0
};;

const store = createStore(
  reducer,
  initialState
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
