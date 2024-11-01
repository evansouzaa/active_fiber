import React, { Suspense } from "react";

import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "./redux/store";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";

import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import Loader from  './components/loader/Loader'

import 'react-toastify/dist/ReactToastify.css';
import "./assets/scss/style.scss";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <ToastContainer position="bottom-right" />
          <RouterProvider router={router} />
        </Suspense>
      </PersistGate>
    </Provider>)
};

export default App;
