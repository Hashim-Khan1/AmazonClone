import axios from "axios";
import Cookies from "js-cookie";

import { useState, useEffect } from "react";
import Nav from "../components/Nav";

import Footer from "../components/Footer";

function BasketPage() {
  const [basketItems, setBasketItems] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState("");

  const checkCookie = () => {
    const cookieValue = Cookies.get("AccessToekn");

    if (cookieValue == undefined) return false;
    return cookieValue;
  };
  const verifyCookie = async (tokenValue: any) => {
    try {
      const result = await axios.post(
        "http://localhost:3000/user/verify-token",
        {
          token: tokenValue,
        }
      );
      console.log(result.data.tokenAuth);
      setisLoggedIn(result.data.tokenAuth);
    } catch (error) {
      console.log(error);
    }
  };
  const getBasketItems = () => {
    if (localStorage.getItem("basketItems") != null) {
      const basketItemsLocal = localStorage.getItem("basketItems");
      setBasketItems(JSON.parse(basketItemsLocal));
    }
  };
  const renderItems = (items: any) => {
    return items.map((el: any) => {
      return (
        <div className="column" style={{ minWidth: "100%" }}>
          <div className="productContainer row">
            <img src="src/assets/img/weights.png" className="productImg" />
            <div className="column" style={{ margin: "0 17px" }}>
              <p className="productTitleProductPage">
                {el.productInfo.productTitle}
              </p>
              <p className="productTitleProductPage">£{el.productInfo.price}</p>
              <p> </p>
              <p>Get it Wednesday, 5 Apr </p>
              <p>FREE Delivery by Amazon </p>
              <div className="row " style={{ margin: "10px 0" }}>
                <p>Quantity: {el.quantity}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  const orderItems = async () => {
    const { id } = isLoggedIn;
    if (id !== false && id !== undefined) {
      let basketItems = localStorage.getItem("basketItems");
      try {
        let res = await axios.post(
          "http://localhost:3000/post/order-products",
          {
            products: basketItems,
            ID: id,
          }
        );
        if (res.data.response == "Orders added") {
          localStorage.clear();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    getBasketItems();
    verifyCookie(checkCookie());
  }, []);
  return (
    <>
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
            <div className="column" style={{ width: "100%" }}>
              {basketItems != ""
                ? renderItems(basketItems)
                : "No products in basket"}
            </div>

            <div className="checkoutBox column" style={{ minWidth: "300px" }}>
              <p className="productTitleProductPage">£72.55</p>
              <p>FREE delivery Monday, April 17. Details</p>
              <p>In stock</p>
              <p>
                EU products may differ from UK products. Additional terms apply.
                Learn More.
              </p>
              <div className="yellowBtn" onClick={orderItems}>
                Order products
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
export default BasketPage;
