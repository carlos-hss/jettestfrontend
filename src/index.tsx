import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context";
import GlobalStyles from "./globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
