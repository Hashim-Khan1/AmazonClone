import { useState } from "react";

function SecondSection() {
  const [count, setCount] = useState(0);
  const shoes = [
    {
      productID: 0,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
      category: "mensShoes",
    },
    {
      productID: 1,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
      category: "Womenshoes",
    },
    {
      productID: 2,
      title: "DLSports shoe",
      img: "src/assets/img/weights.png",
      category: "mensShoes",
    },
    {
      productID: 3,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
      category: "mensShoes",
    },
    {
      productID: 4,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
      category: "mensShoes",
    },
    {
      productID: 5,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
      category: "mensShoes",
    },
    {
      productID: 6,
      title: "DLSports shoe",
      img: "src/assets/img/weights.png",
      category: "mensShoes",
    },
    {
      productID: 7,
      title: "Sports shoe",
      img: "src/assets/img/weights.png",
      category: "mensShoes",
    },
  ];
  const loadData = (objData: any) => {
    return objData.map((obj: any) => {
      return (
        <a
          href={`products/${obj.category}`}
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
