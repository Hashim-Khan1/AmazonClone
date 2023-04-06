import { useState } from "react";
import "./App.css";

import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/productPage";
import ProductInduvidual from "./pages/ProductInduvidual";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <SignInPage/> */}

      {/* <HomePage /> */}
      {/* <ProductPage /> */}
      {/* <ProductInduvidual /> */}

      {/* 
        Basket page
      <Nav></Nav>
      <div
        id="containerInduvidual"
        style={{
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <section
          style={{
            paddingTop: "40px",
            backgroundColor: "white",
            marginTop: "50px",
          }}
        >
          <p
            className="productTitleProductPage"
            style={{ fontSize: "25px", fontWeight: "normal" }}
          >
            Shopping Basekt
          </p>
          <hr
            style={{ borderTop: "1px solid #e3e6e6", marginBottom: "20px" }}
          />
          <div className="row" id="basketRow">
            <div className="column">
              <div className="productContainer row">
                <div></div>
                <img src="src/assets/img/weights.png" className="productImg" />
                <div className="column" style={{ margin: "0 17px" }}>
                  <p className="productTitleProductPage">
                    Sony PlayStation DualShock 4 Controller - Black
                  </p>
                  <p className="productTitleProductPage">£39.99</p>
                  <p> </p>
                  <p>Get it Wednesday, 5 Apr </p>
                  <p>FREE Delivery by Amazon </p>
                  <div className="row " style={{ margin: "10px 0" }}>
                    <p>Quantity</p>
                    <select name="" id="" style={{ marginLeft: "10px" }}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkoutBox column">
              <p className="productTitleProductPage">£72.55</p>
              <p>FREE delivery Monday, April 17. Details</p>
              <p>In stock</p>
              <p>
                EU products may differ from UK products. Additional terms apply.
                Learn More.
              </p>

              <div className="yellowBtn">Add to basekt</div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
