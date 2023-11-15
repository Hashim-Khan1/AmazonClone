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
      const res = await axios.get("http://localhost:3000/post/" + result);
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
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
export default ProductInduvidual;
