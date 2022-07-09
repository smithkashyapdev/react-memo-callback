import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from "redux";
import rootReducer from './reducers/index';
import App from './App';
import { Provider } from 'react-redux'
const store = createStore(rootReducer);
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
  <StrictMode>
    
    <App />
   
  </StrictMode>
  </Provider>
);
