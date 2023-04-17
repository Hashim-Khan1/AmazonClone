import { Route, Routes } from "react-router-dom";

import "./App.css";

import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductInduvidual from "./pages/ProductInduvidual";
import BasketPage from "./pages/BasketPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/products/:slugs" element={<ProductPage />} />
        <Route path="/product/:yetu" element={<ProductInduvidual />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </div>
  );
}

export default App;
