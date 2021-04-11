import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../../reducers';

const createMockStore = (initialState) =>
  createStore(rootReducers, initialState, applyMiddleware(thunk));

const renderWithRouterRedux = (
    component,
    { initialState, store = createMockStore(initialState) } = {},
  ) => {
    const history = createMemoryHistory();
    return ({
    ...render (
      <Provider store={store}>
        <Router history={history}>
          {component}
        </Router>
      </Provider> ), store, history,
  });
}

export default renderWithRouterRedux;