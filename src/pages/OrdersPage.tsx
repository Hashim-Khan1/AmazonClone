import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function BasketPage() {
  const [basketItems, setBasketItems] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const checkCookie = () => {
    const cookieValue = Cookies.get("AccessToekn");

    if (cookieValue == undefined) return false;
    return cookieValue;
  };
  const getBasketItems = async (username: string) => {
    try {
      const result = await axios.post(
        "http://localhost:3000/post/get-total-orders",
        {
          username: username,
        }
      );
      setBasketItems(result.data.orderItems);
    } catch (error) {
      console.log(error);
    }
  };
  const verifyCookie = async (tokenValue: any) => {
    try {
      const result = await axios.post(
        "http://localhost:3000/user/verify-token",
        {
          token: tokenValue,
        }
      );
      setisLoggedIn(result.data.tokenAuth);
      const { id } = result.data.tokenAuth;
      getBasketItems(id);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItems = (items: any) => {
    return items.map((el: any) => {
      return (
        <div className="column" style={{ minWidth: "100%" }}>
          <div className="productContainer row">
            <img src="src/assets/img/weights.png" className="productImg" />
            <div className="column" style={{ margin: "0 17px" }}>
              <p className="productTitleProductPage">{el.productTitle}</p>
              <p className="productTitleProductPage">£{el.price}</p>
              <p> </p>
              <p>Get it Wednesday, 5 Apr </p>
              <p>FREE Delivery by Amazon </p>
              <div className="row " style={{ margin: "10px 0" }}></div>
            </div>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
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
            Orders
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
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
export default BasketPage;
