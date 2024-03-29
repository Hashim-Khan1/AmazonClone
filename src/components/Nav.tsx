import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function Nav() {
  const [userInfo, setUserInfo] = useState("");
  const [basketItems, setbasketItems] = useState(0);

  const lowerNavArray = [
    "Sports",
    "Fragrances",
    "Mobile phones",
    "Tablets",
    "TV",
    "Consoles",
    "Food",
    "Books",
    "Audio devices",
    "Video Games",
    "PC",
  ];
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
      if (result != false) {
        let { id } = result.data.tokenAuth;
        setUserInfo(id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getBasketItems = () => {
    if (localStorage.getItem("basketItems") !== null) {
      let basketItems = JSON.parse(localStorage.getItem("basketItems"));
      setbasketItems(basketItems.length);
    }
  };

  useEffect(() => {
    if (checkCookie() != false) {
      verifyCookie(checkCookie());
    }
    getBasketItems();
  }, [userInfo, basketItems]);
  return (
    <nav>
      <div className="row" id="upperNav">
        <img src="../src/assets/img/logo.png" id="logo" />
        <div
          className="row upperNavContentBox"
          id="addressBox"
          style={{ margin: "0 25px" }}
        >
          <img src="../src/assets/img/pin.png" id="pin" />
          <div className="column">
            <p className="greyText">Hello</p>
            <p className="whiteBold" style={{ letterSpacing: "1px" }}>
              Select your address
            </p>
          </div>
        </div>
        <div className="row" id="parentSearch" style={{ alignItems: "center" }}>
          <input type="text" id="search" placeholder="Search Amazone Clone" />
          <div className="searchBtn"></div>
        </div>
        <a
          className="row upperNavContentBox"
          style={{ margin: "0 25px", color: "white" }}
          href="/login"
        >
          <img src="../src/assets/img/gbFlag.png" id="flag" />
          <div className="column">
            <p className="greyText">
              Hello, {userInfo != "" ? userInfo : "sign up"}
            </p>
            <p className="whiteBold" style={{ letterSpacing: "1px" }}>
              Accounts & Lists
            </p>
          </div>
        </a>
        <div className="row upperNavContentBox" style={{ margin: "0 5px" }}>
          <div className="column">
            <p className="greyText">Returns</p>
            <p className="whiteBold" style={{ letterSpacing: "1px" }}>
              & Orders
            </p>
          </div>
        </div>
        <div
          className="row upperNavContentBox"
          style={{ margin: "0 20px", alignItems: "center" }}
        >
          <a
            href="/basket"
            className="row alignItemsCenter"
            style={{ color: "white" }}
          >
            <div className="column">
              <p
                style={{
                  marginLeft: "10px",
                  color: "#febd69",
                  fontWeight: "bold",
                }}
                id="basketItem"
              >
                {basketItems}
              </p>
              <img src="../src/assets/img/basket.png" id="basket" />
            </div>
            <p
              className="whiteBold"
              style={{ letterSpacing: "1px", paddingLeft: "3px" }}
            >
              Basket
            </p>
          </a>
        </div>
      </div>
      <div className="row" id="lowerNav">
        {lowerNavArray.map((el: any) => {
          return (
            <>
              <p>
                <a href={`/products/${el}`} style={{ color: "white" }}>
                  {el}
                </a>
              </p>
            </>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
