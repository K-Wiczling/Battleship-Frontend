import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';

// Redux imports
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import { currentAppMode, userData } from './containers/App/redux/reducer';
import { setupGameParameters } from './containers/MainMenu/redux/reducer';
import { currentBords, currentGameConsole, inGameMenu } from './containers/Game/redux/reducer';
import { currentWebsitePage, registerPage } from './containers/Website/redux/reducer';

// Redux section
const logger = createLogger();
const rootReducer = combineReducers({ 
  currentAppMode, 
  currentBords, 
  currentGameConsole, 
  inGameMenu, 
  setupGameParameters, 
  currentWebsitePage, 
  registerPage,
  userData,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
