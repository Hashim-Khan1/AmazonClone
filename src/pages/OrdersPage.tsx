import { useState, useEffect } from "react";
import Nav from "../components/Nav";

import Footer from "../components/Footer";

function BasketPage() {
  const [basketItems, setBasketItems] = useState("");
  const getBasketItems = () => {
    console.log("sss");
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
  useEffect(() => {
    getBasketItems();
  }, []);
  return (
    <>
      {console.log(basketItems)}
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
