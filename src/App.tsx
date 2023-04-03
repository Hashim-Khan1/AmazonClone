import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import FirstSection from "./layouts/FirstSection";
import SecondSection from "./layouts/SecondSection";
import ThirdSection from "./layouts/ThirdSection";
import Footer from "./components/Footer";
import SignIn from "./layouts/SignIn";
import Register from "./layouts/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/*        
      Home Page
      <Nav></Nav>
      <div id="backgroundImg"></div>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <Footer></Footer>*/}

      {/* Login/Signup page
       <div id="container">
        <SignIn></SignIn> 
        <Register></Register>
      </div> */}

      <Nav></Nav>
      <section style={{ backgroundColor: "white", width: "100%" }}>
        <div className="productContainer row">
          <div></div>
          <img src="src/assets/img/weights.png" alt="" />
          <div className="column" style={{ margin: "0 17px" }}>
            <p className="productTitleProductPage" style={{}}>
              Sony PlayStation DualShock 4 Controller - Black
            </p>
            <p className="productTitleProductPage">£39.99</p>
            <p> </p>
            <p>Get it Wednesday, 5 Apr </p>
            <p>FREE Delivery by Amazon </p>
          </div>
        </div>
        <div className="productContainer row">
          <div></div>
          <img src="src/assets/img/weights.png" alt="" />
          <div className="column" style={{ margin: "0 17px" }}>
            <p className="productTitleProductPage" style={{}}>
              Sony PlayStation DualShock 4 Controller - Black
            </p>
            <p className="productTitleProductPage">£39.99</p>
            <p> </p>
            <p>Get it Wednesday, 5 Apr </p>
            <p>FREE Delivery by Amazon </p>
          </div>
        </div>
        <div className="productContainer row">
          <div></div>
          <img src="src/assets/img/weights.png" alt="" />
          <div className="column" style={{ margin: "0 17px" }}>
            <p className="productTitleProductPage" style={{}}>
              Sony PlayStation DualShock 4 Controller - Black
            </p>
            <p className="productTitleProductPage">£39.99</p>
            <p> </p>
            <p>Get it Wednesday, 5 Apr </p>
            <p>FREE Delivery by Amazon </p>
          </div>
        </div>
        <div className="productContainer row">
          <div></div>
          <img src="src/assets/img/weights.png" alt="" />
          <div className="column" style={{ margin: "0 17px" }}>
            <p className="productTitleProductPage" style={{}}>
              Sony PlayStation DualShock 4 Controller - Black
            </p>
            <p className="productTitleProductPage">£39.99</p>
            <p> </p>
            <p>Get it Wednesday, 5 Apr </p>
            <p>FREE Delivery by Amazon </p>
          </div>
        </div>
        <div className="productContainer row">
          <div></div>
          <img src="src/assets/img/weights.png" alt="" />
          <div className="column" style={{ margin: "0 17px" }}>
            <p className="productTitleProductPage" style={{}}>
              Sony PlayStation DualShock 4 Controller - Black
            </p>
            <p className="productTitleProductPage">£39.99</p>
            <p> </p>
            <p>Get it Wednesday, 5 Apr </p>
            <p>FREE Delivery by Amazon </p>
          </div>
        </div>
        <div className="productContainer row">
          <div></div>
          <img src="src/assets/img/weights.png" alt="" />
          <div className="column" style={{ margin: "0 17px" }}>
            <p className="productTitleProductPage" style={{}}>
              Sony PlayStation DualShock 4 Controller - Black
            </p>
            <p className="productTitleProductPage">£39.99</p>
            <p> </p>
            <p>Get it Wednesday, 5 Apr </p>
            <p>FREE Delivery by Amazon </p>
          </div>
        </div>
        <div className="productContainer row">
          <div></div>
          <img src="src/assets/img/weights.png" alt="" />
          <div className="column" style={{ margin: "0 17px" }}>
            <p className="productTitleProductPage" style={{}}>
              Sony PlayStation DualShock 4 Controller - Black
            </p>
            <p className="productTitleProductPage">£39.99</p>
            <p> </p>
            <p>Get it Wednesday, 5 Apr </p>
            <p>FREE Delivery by Amazon </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
