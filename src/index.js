import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import rootReducer from './reducers/index';
import App from './App';
import container from './store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={container}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
