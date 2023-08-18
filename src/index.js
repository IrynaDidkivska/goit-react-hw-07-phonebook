import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize/modern-normalize.css';
import { Global } from 'styles/Global';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { App } from 'App';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
      <Global />
      <ToastContainer autoClose={1500} />
    </Provider>
  </>
);
