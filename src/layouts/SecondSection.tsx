import { useState } from "react";

function SecondSection(props: any) {
  const shoes = props.navItems;
  console.log(shoes);
  const loadData = (objData: any) => {
    return objData.map((obj: any) => {
      console.log(obj, "sss");
      return (
        <a
          href={`products/${obj}`}
          className="imgAndText"
          key={obj.productID}
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <img
            src={"http://localhost:3000/post/product/" + obj}
            className="circleImg borderRnd"
          ></img>
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
