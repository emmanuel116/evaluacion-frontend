import React from 'react';
import ReactDOM from 'react-dom/client';
import { Normalize } from 'styled-normalize';
import App from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middleware = [thunk];
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const loggedIn: boolean = store.getState().reducerApp.loggedIn;

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Normalize />
      <App loggedIn={loggedIn} />
    </React.StrictMode>
  </Provider>
);