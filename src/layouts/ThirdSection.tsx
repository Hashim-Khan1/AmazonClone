import { useState } from "react";

function ThirdSection() {
  const [count, setCount] = useState(0);
  const discountItems = [
    {
      productID: 0,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
      price: "£13.99",
    },
    {
      productID: 1,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
      price: "£13.99",
    },
    {
      productID: 2,
      title: "DLSports shoe",
      img: "src/assets/img/weights.png",
      price: "£13.99",
    },
    {
      productID: 3,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
      price: "£13.99",
    },
    {
      productID: 4,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
      price: "£13.99",
    },
    {
      productID: 5,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
      price: "£13.99",
    },
    {
      productID: 6,
      title: "DLSports shoe",
      img: "src/assets/img/weights.png",
      price: "£13.99",
    },
    {
      productID: 7,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
      price: "£13.99",
    },
  ];
  const loadData = (objData: any) => {
    return objData.map((obj: any) => {
      return (
        <a
          className="imgAndText"
          key={obj.productID}
          href={`product/${obj.productID}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            className="circleImg"
            style={{ backgroundColor: "#e3e6e6" }}
          ></div>
          <div className="row alignItemsCenter" style={{ margin: "10px 0" }}>
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
            {obj.price}
          </p>
          <p className="productTitleSmall">{obj.title}</p>
        </a>
      );
    });
  };
  return (
    <section>
      <div className="longScrollContainer">
        <p className="contentCardTitle">
          Browse other products on discount you may like
        </p>
        <div className="row">{loadData(discountItems)}</div>
      </div>
    </section>
  );
}

export default ThirdSection;
