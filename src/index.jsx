import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StyleProvider } from '@ant-design/cssinjs';
import { persistor, store } from "./redux/createStore";
import { Preloader } from "./components";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={<Preloader />} persistor={persistor}>
      <StyleProvider hashPriority="high">
        <App />
      </StyleProvider>
    </PersistGate>
  </Provider>
);
