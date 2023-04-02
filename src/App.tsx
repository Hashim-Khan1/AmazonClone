import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav></Nav>
      <div id="backgroundImg"></div>

      <section id="firstSection">
        <div className="row" style={{ justifyContent: "space-evenly" }}>
          <div className="contentCardContainer column">
            <p className="contentCardTitle">Pick up where you left off</p>
            <div className="row">
              <div className="contentBox column">
                <img src="src/assets/img/weights.png" className="contentImg" />
                <p>JLL® Cast Iron Weight P…</p>
              </div>
              <div className="contentBox column">
                <img src="src/assets/img/weights.png" className="contentImg" />
                <p>JLL® Cast Iron Weight P…</p>
              </div>
            </div>
            <div className="row">
              <div className="contentBox column">
                <img src="src/assets/img/weights.png" className="contentImg" />
                <p>JLL® Cast Iron Weight P…</p>
              </div>
              <div className="contentBox column">
                <img src="src/assets/img/weights.png" className="contentImg" />
                <p>JLL® Cast Iron Weight P…</p>
              </div>
            </div>
          </div>
          <div className="contentCardContainer column">
            <p className="contentCardTitle">Keep shopping for</p>
            <div className="row">
              <div className="contentBox column">
                <img src="src/assets/img/weights.png" className="contentImg" />
                <p>JLL® Cast Iron Weight P…</p>
              </div>
              <div className="contentBox column">
                <img src="src/assets/img/weights.png" className="contentImg" />
                <p>JLL® Cast Iron Weight P…</p>
              </div>
            </div>
            <div className="row">
              <div className="contentBox column">
                <img src="src/assets/img/weights.png" className="contentImg" />
                <p>JLL® Cast Iron Weight P…</p>
              </div>
              <div className="contentBox column">
                <img src="src/assets/img/weights.png" className="contentImg" />
                <p>JLL® Cast Iron Weight P…</p>
              </div>
            </div>
          </div>
          <div className="contentCardContainer column">
            <p className="contentCardTitle">Top Deal</p>
            <div className="row">
              <div className="contentBox column">
                <img src="src/assets/img/weights.png" className="contentImg" />
                <p>JLL® Cast Iron Weight P…</p>
              </div>
              <div className="contentBox column">
                <img src="src/assets/img/weights.png" className="contentImg" />
                <p>JLL® Cast Iron Weight P…</p>
              </div>
            </div>
            <div className="row">
              <div className="contentBox column">
                <img src="src/assets/img/weights.png" className="contentImg" />
                <p>JLL® Cast Iron Weight P…</p>
              </div>
              <div className="contentBox column">
                <img src="src/assets/img/weights.png" className="contentImg" />
                <p>JLL® Cast Iron Weight P…</p>
              </div>
            </div>
          </div>
          <div className="contentCardContainer column">
            <p className="contentCardTitle">Today's Deals</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
