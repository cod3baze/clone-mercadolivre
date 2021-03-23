import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTs
import Home from "./Pages/Home";
import ProductInfo from "./Pages/ProductInfo";
import QuerySearch from "./Pages/QuerySearch";
import Cart from "./Pages/Cart";
// STATICs
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<QuerySearch />} />
          <Route
            path="/product_info/:product_name/:product_id"
            element={<ProductInfo />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <GlobalStyles />
      </BrowserRouter>
    </>
  );
};

export default App;
