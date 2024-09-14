import React from "react";
import ReactDOM from "react-dom/client";
import AppWithLazyLoading from "./AppWithLazyLoading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AppWithLazyLoading />
  // </React.StrictMode>
);
