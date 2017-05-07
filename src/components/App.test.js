import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store'
const middlewares = []
const mockStore = configureMockStore(middlewares)


it('renders without crashing', () => {

  const initialState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
  }
  const store = mockStore(initialState)

  const div = document.createElement('div');
  ReactDOM.render(
      <Provider store={store}>
      <App />
      </Provider>
      , div);
});
