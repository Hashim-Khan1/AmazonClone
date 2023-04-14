import { useState, useEffect } from "react";
import axios from "axios";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function ProductPage() {
  const [pageOffset, setpageOffset] = useState(1);
  const [pageLength, setpageLength] = useState();
  const [productData, setProductData] = useState([]);

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
      const res = await axios.post("http://localhost:3000/post/load-products", {
        category: result,
        limit: pageOffset,
      });
      setProductData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const loadRows = async () => {
    let result = correctSQL();

    try {
      const res = await axios.post(
        "http://localhost:3000/post/load-products-length",
        {
          category: result,
        }
      );
      setpageLength(res.data.productsLength);
    } catch (error) {
      console.log(error);
    }
  };
  const renderPageNation = (pageNumbers: any) => {
    const numberOfRows = Math.ceil(pageNumbers / 4);
    const array = Array.from({ length: numberOfRows }, (_, index) => index + 1);
    return array.map((element) => {
      return (
        <div className="pageNationRow row">
          <div onClick={clickFunction}>{element}</div>
        </div>
      );
    });
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
              Get it by {date + 1} {monthNames[today.getMonth()]}
            </p>
            <p>FREE Delivery by Amazon </p>
          </div>
        </a>
      );
    });
  };

  const clickFunction = (e: any) => {
    setpageOffset(e.currentTarget.innerText);
  };

  useEffect(() => {
    loadProductData();
    loadRows();
  }, [pageOffset]);
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
        <div className="pageNationRow row">
          {productData != false ? renderPageNation(pageLength) : "no products "}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default ProductPage;
