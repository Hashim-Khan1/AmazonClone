import { useRef } from "react";

function Product(props: any) {
  const quanityRef = useRef(1);
  const renderDate = () => {
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
    return [date + 1, " ", monthNames[today.getMonth()]];
  };
  const addToBasket = (e: any) => {
    let basketNumber = document.getElementById("basketItem");
    const basketNumberNew = basketNumber?.innerText;
    const newBasketNumber = +basketNumberNew + 1;
    console.log(newBasketNumber);
    basketNumber.innerText = newBasketNumber;
    const items = {
      quantity: quanityRef.current.value,
      productInfo: props,
    };

    if (localStorage.getItem("basketItems") == null) {
      const itemsArray = [items];
      localStorage.setItem("basketItems", JSON.stringify(itemsArray));
    } else {
      let basketItems = JSON.parse(localStorage.getItem("basketItems"));
      basketItems.push(items);
      const updatedItems = JSON.stringify(basketItems);
      localStorage.setItem("basketItems", updatedItems);
    }
  };
  return (
    <div className="row" id="productRow">
      <div className="row">
        <div className="imgRow">
          <img src="src/assets/img/weights.png" alt="" className="imgColumn" />
        </div>
        <div className="bigImgContainer"></div>
      </div>

      <div className="productDescriptionBox column">
        <p className="productTitleProductPage">{props.productTitle}</p>
        <p style={{ fontSize: "13px" }}>
          <b>Category: {props.category}</b>
        </p>
        <hr style={{ margin: "10px 0" }} />
        <p className="productTitleProductPage">£{props.price}</p>
        <ul className="productList">
          <li className="productPoint">
            <b>Description:</b>
            {props.productDescription}
          </li>
        </ul>
      </div>
      <div className="checkoutBox column" id="productPageCheckoutBox">
        <p className="productTitleProductPage">£ {props.price}</p>
        <p>FREE delivery Monday, {renderDate()}</p>
        <p>In stock</p>
        <p>
          EU products may differ from UK products. Additional terms apply. Learn
          More.
        </p>
        <div className="row " style={{ margin: "10px 0" }}>
          <p>Quantity</p>
          <select
            ref={quanityRef}
            name="quantityVal"
            style={{ marginLeft: "10px" }}
          >
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

        <div onClick={addToBasket} className="yellowBtn">
          Add to basekt
        </div>
      </div>
    </div>
  );
}
export default Product;
