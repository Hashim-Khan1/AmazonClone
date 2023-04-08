import { useState } from "react";

function SecondSection() {
  const [count, setCount] = useState(0);
  const shoes = [
    {
      productID: 0,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
    },
    {
      productID: 1,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
    },
    {
      productID: 2,
      title: "DLSports shoe",
      img: "src/assets/img/weights.png",
    },
    {
      productID: 3,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
    },
    {
      productID: 4,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
    },
    {
      productID: 5,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
    },
    {
      productID: 6,
      title: "DLSports shoe",
      img: "src/assets/img/weights.png",
    },
    {
      productID: 7,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
    },
  ];
  const loadData = (objData: any) => {
    return objData.map((obj: any) => {
      return (
        <a
          href={`products/${obj.productID}`}
          className="imgAndText"
          key={obj.productID}
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <div className="circleImg borderRnd"></div>
          <p className="productTitle">{obj.title}</p>
        </a>
      );
    });
  };
  return (
    <section>
      <div className="longScrollContainer">
        <p className="contentCardTitle">Pick up where you left off</p>
        <div className="row">{loadData(shoes)}</div>
      </div>
    </section>
  );
}

export default SecondSection;
