import { useState } from "react";
import "./App.css";

import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/productPage";
import ProductInduvidual from "./pages/ProductInduvidual";
import BasketPage from "./pages/BasketPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <SignInPage/> */}

      {/* <HomePage /> */}
      {/* <ProductPage /> */}
      {/* <ProductInduvidual /> */}
      {/* <BasketPage /> */}
    </div>
  );
}

export default App;
