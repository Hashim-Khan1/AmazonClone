import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import FirstSection from "./layouts/FirstSection";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Nav></Nav>
      <div id="backgroundImg"></div>
      <FirstSection></FirstSection>
      <section>
        <div className="longScrollContainer">
          <p className="contentCardTitle">Pick up where you left off</p>
          <div className="row">
            <div className="imgAndText">
              <div className="circleImg"></div>
              <p>title</p>
            </div>
            <div className="imgAndText">
              <div className="circleImg"></div>
              <p>title</p>
            </div>
            <div className="imgAndText">
              <div className="circleImg"></div>
              <p>title</p>
            </div>
            <div className="imgAndText">
              <div className="circleImg"></div>
              <p>title</p>
            </div>
            <div className="imgAndText">
              <div className="circleImg"></div>
              <p>title</p>
            </div>
            <div className="imgAndText">
              <div className="circleImg"></div>
              <p>title</p>
            </div>
            <div className="imgAndText">
              <div className="circleImg"></div>
              <p>title</p>
            </div>
            <div className="imgAndText">
              <div className="circleImg"></div>
              <p>title</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
