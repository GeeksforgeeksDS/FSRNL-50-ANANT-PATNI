import React from "react";
import ReactDOM from "react-dom/client";
import AppWithRouting from "./AppWithRouting";
import AppWithLazyLoading from "./AppWithLazyLoading";
import DataFetchUsingAPI from "./DataFetchUsingAPI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AppWithRouting />
  // </React.StrictMode>
);
