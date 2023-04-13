import { useState, useEffect } from "react";
import axios from "axios";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function ProductPage() {
  const [productData, setProductData] = useState([]);
  const loadProductData = async () => {
    let urlPath = window.location.pathname.split("/");
    const lastIndex = urlPath.slice(-1)[0];
    console.log(lastIndex);
    try {
      const res = await axios.post("http://localhost:3000/post/load-products", {
        category: lastIndex,
      });
      setProductData(res.data.products);
      console.log(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  const renderProducts = () => {
    const today = new Date();

    const date = today.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date();
    return productData.map((element) => {
      return (
        <div className="productContainer row">
          <img src="src/assets/img/weights.png" className="productImg" />
          <div className="column" style={{ margin: "0 17px" }}>
            <p className="productTitleProductPage">{element.productTitle}</p>
            <p className="productTitleProductPage">{element.price}</p>
            <p>
              Get it by {date + 1} {monthNames[d.getMonth()]}
            </p>
            <p>FREE Delivery by Amazon </p>
          </div>
        </div>
      );
    });
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
        <section style={{ backgroundColor: "white", minHeight: "100vh" }}>
          {productData != false ? renderProducts() : "no products "}
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
export default ProductPage;
