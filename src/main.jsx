/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store,persistor } from './assets/redux/Store.jsx';
import { PersistGate } from 'redux-persist/integration/react'
import 'react-toastify/dist/ReactToastify.css';
import { app } from './assets/redux/Firebase.Config.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store} app={app}>
          <PersistGate loading={"loading"} persistor={persistor}>
             <App />
          </PersistGate>
        </Provider>

)
