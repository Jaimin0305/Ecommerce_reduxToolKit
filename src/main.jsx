import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { store } from './redux/app/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
    <App />
  </Provider>

  </>
)
