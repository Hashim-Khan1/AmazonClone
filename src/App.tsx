import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);
  const weightsObject = [
    {
      productID: 0,
      title: "JLL® Cast Iron Weight P…",
      img: "src/assets/img/weights.png",
    },
    {
      productID: 1,
      title: "HLL® Cast Iron Weight P…",
      img: "src/assets/img/weights.png",
    },
    {
      productID: 2,
      title: "DLL® Cast Iron Weight P…",
      img: "src/assets/img/weights.png",
    },
    {
      productID: 3,
      title: "ZLL® Cast Iron Weight P…",
      img: "src/assets/img/weights.png",
    },
  ];
  const loadData = (objData: any) => {
    return objData.map((obj: any) => {
      return (
        <div className="contentBox column" key={obj.productID}>
          <img src={obj.img} className="contentImg" />
          <p>{obj.title}</p>
        </div>
      );
    });
  };
  return (
    <div className="App">
      <Nav></Nav>
      <div id="backgroundImg"></div>

      <section id="firstSection">
        <div
          className="row"
          style={{ justifyContent: "space-evenly", alignItems: "flex-start" }}
        >
          <div className="contentCardContainer column">
            <p className="contentCardTitle">Pick up where you left off</p>
            <div className="flexContainer">
              <div className="flexContainer">{loadData(weightsObject)}</div>
            </div>
          </div>
          <div className="contentCardContainer column">
            <p className="contentCardTitle">Pick up where you left off</p>
            <div className="flexContainer">{loadData(weightsObject)}</div>
          </div>
          <div className="contentCardContainer column">
            <p className="contentCardTitle">Today's Deals</p>
            <img src="src/assets/img/sportsBundle.png" alt="" />
            <div className="row alignItemsCenter" style={{ margin: "10px 0 " }}>
              <div className="discountLabel">50% Off</div>
              <p style={{ color: "#cc0c39", fontWeight: "bold" }}>Deal</p>
            </div>
            <p>Sports Equipment from Speedo, Berghaus, Mitre and Canterbury</p>
          </div>
          <div className="contentCardContainer column">
            <p className="contentCardTitle">Get the most out of Amazon</p>
            <div className="yellowBtn">Create an account</div>
            <p style={{ textAlign: "center", color: "" }}>Sign in securely</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
