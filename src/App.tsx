import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import FirstSection from "./layouts/FirstSection";
import SecondSection from "./layouts/SecondSection";
import ThirdSection from "./layouts/ThirdSection";
import Footer from "./components/Footer";

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
      <div id="container">
        <div id="loginLogo"></div>
        <div className="formLoginContainer">
          <p id="formTitle">Sign in</p>
          <form className="column" action="#">
            <p className="label">Email or mobile phone number</p>
            <input className="formInpt" type="text" />
            <input type="submit" className="loginBtn" value={"Continue"} />
          </form>
        </div>
        <div
          className="row alignItemsCenter"
          style={{ width: "350px", margin: "20px auto" }}
        >
          <div className="line"></div>
          <p
            style={{
              minWidth: "max-content",
              fontSize: "13px",
              margin: "0 15px",
            }}
          >
            New to Not amazon
          </p>
          <div className="line"></div>
        </div>
        <div className="greyGBtn">Create your not amazon account</div>
      </div>
    </div>
  );
}

export default App;
