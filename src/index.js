import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/reducers/root.reducer';
import thunk from 'redux-thunk'
import { GoogleOAuthProvider } from '@react-oauth/google';

const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
const root = ReactDOM.createRoot(document.getElementById('root'));
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={clientId}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>
);

reportWebVitals();
