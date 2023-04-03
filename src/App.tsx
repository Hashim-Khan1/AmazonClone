import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import FirstSection from "./layouts/FirstSection";

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
      <FirstSection></FirstSection>
    </div>
  );
}

export default App;
