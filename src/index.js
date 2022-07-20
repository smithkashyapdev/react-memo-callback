import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import rootReducer from './reducers/index';
import App from './App';
import store from './saga/store';
import { Provider } from 'react-redux';
import HomeNavigator from './navigation/home'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
