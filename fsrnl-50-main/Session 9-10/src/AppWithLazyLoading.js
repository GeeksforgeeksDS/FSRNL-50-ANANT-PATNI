import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreComponent from "./StoreComponent";

const ProductComponent = lazy(() => import("./ProductComponent"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoreComponent />} />
        <Route
          path="/product/:id"
          element={
            <Suspense fallback="hello">
              <ProductComponent />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
