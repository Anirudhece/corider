import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {chatApi} from './redux/api'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ApiProvider api={chatApi}>
      <App />
      </ApiProvider>
    </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
