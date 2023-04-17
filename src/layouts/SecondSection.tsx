import { useState } from "react";

function SecondSection(props: any) {
  const [count, setCount] = useState(0);
  const shoes = props.navItems;

  const loadData = (objData: any) => {
    return objData.map((obj: any) => {
      return (
        <a
          href={`products/${obj}`}
          className="imgAndText"
          key={obj.productID}
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <div className="circleImg borderRnd"></div>
          <p className="productTitle">{obj}</p>
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
