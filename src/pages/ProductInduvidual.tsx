import { useState, useEffect } from "react";
import axios from "axios";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Product from "../components/ProductInduvidual";

function ProductInduvidual() {
  const [ProductData, setProductData] = useState();

  const correctSQL = () => {
    let urlPath = window.location.pathname.split("/");
    const lastIndex = urlPath.slice(-1)[0];
    if (lastIndex.includes("%20")) {
      return lastIndex.replace("%20", " ");
    } else {
      return lastIndex;
    }
  };
  const loadProductData = async () => {
    let result = correctSQL();
    try {
      const res = await axios.post(
        "http://localhost:3000/post/load-products-productID",
        {
          productID: result,
        }
      );
      setProductData(res.data.productData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProductData();
  }, []);
  return (
    <>
      <Nav></Nav>
      <div
        id="containerInduvidual"
        style={{
          backgroundColor: "white",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <section style={{ paddingTop: "40px" }}>
          {ProductData !== false ? (
            <Product
              productTitle={ProductData?.productTitle}
              category={ProductData?.category}
              productDescription={ProductData?.productDescription}
              price={ProductData?.price}
              productID={ProductData?.productID}
            />
          ) : (
            "Cannot find Product"
          )}
          <p className="contentCardTitle" style={{ marginTop: "20px" }}>
            Browse other products on discount you may like
          </p>
          <div className="row" style={{ margin: "20px 0" }}>
            <div className="imgAndText">
              <div
                className="circleImg"
                style={{ backgroundColor: "#e3e6e6" }}
              ></div>
              <div
                className="row alignItemsCenter"
                style={{ margin: "10px 0" }}
              >
                <div className="discountLabel" style={{ fontSize: "12px" }}>
                  50% Off
                </div>
                <p
                  style={{
                    color: "#cc0c39",
                    fontWeight: "bold",
                  }}
                >
                  Deal
                </p>
              </div>
              <p
                style={{
                  fontWeight: "bold",
                  padding: "0px 0",
                }}
              >
                {}obj.price
              </p>
              <p className="productTitleSmall">{}obj.title</p>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
export default ProductInduvidual;
