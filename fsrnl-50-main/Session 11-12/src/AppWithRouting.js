import React from "react";
import StoreComponent from "./StoreComponent";
import ProductComponent from "./ProductComponent";
import DonateComponent from "./DonateComponent";
import DocsComponent from "./DocsComponent";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataFetchUsingAPI from "./DataFetchUsingAPI";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataFetchUsingAPI />} />
        <Route path="/product/:id" element={<ProductComponent />} />
        <Route path="/donate" element={<DonateComponent />} />
        <Route path="/docs" element={<DocsComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
