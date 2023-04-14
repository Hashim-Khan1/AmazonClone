import { useState, useEffect } from "react";
import axios from "axios";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function ProductPage() {
  const [pageOffset, setpageOffset] = useState(1);
  const [productData, setProductData] = useState([]);

  const loadProductData = async () => {
    let urlPath = window.location.pathname.split("/");
    const lastIndex = urlPath.slice(-1)[0];
    console.log(lastIndex);
    try {
      const res = await axios.post("http://localhost:3000/post/load-products", {
        category: lastIndex,
        limit: pageOffset,
      });
      setProductData(res.data.products);
      console.log(res.data.products.length);
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
        <a
          className="productContainer row"
          href={`/product/${element.productID}`}
          style={{ color: "black" }}
          key={`${element.productID}`}
        >
          <img src="src/assets/img/weights.png" className="productImg" />
          <div className="column" style={{ margin: "0 17px" }}>
            <p className="productTitleProductPage">{element.productTitle}</p>
            <p className="productTitleProductPage">{element.price}</p>
            <p>
              Get it by {date + 1} {monthNames[d.getMonth()]}
            </p>
            <p>FREE Delivery by Amazon </p>
          </div>
        </a>
      );
    });
  };
  const clickFunction = (e: any) => {
    console.log(e.currentTarget.innerText);
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
          <div className="pageNationRow row">
            <div onClick={clickFunction}>1</div>
            <div onClick={clickFunction}>2</div>
            <div onClick={clickFunction}>3</div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
export default ProductPage;
