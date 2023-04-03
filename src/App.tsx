import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import FirstSection from "./layouts/FirstSection";
import SecondSection from "./layouts/SecondSection";
import ThirdSection from "./layouts/ThirdSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav></Nav>
      <div id="backgroundImg"></div>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <footer className="column">
        <div className="upperFooter">
          <div className="footerBox">
            <p>Get to Know Us</p>
            <p>Careers</p>
            <p>About Us</p>
            <p>UK Modern Slavery Statement</p>
            <p>Sustainability</p>
            <p>Amazon Science</p>
          </div>
          <div className="footerBox">
            <p>Get to Know Us</p>
            <p>Careers</p>
            <p>About Us</p>
            <p>UK Modern Slavery Statement</p>
            <p>Sustainability</p>
            <p>Amazon Science</p>
          </div>
          <div className="footerBox">
            <p>Get to Know Us</p>
            <p>Careers</p>
            <p>About Us</p>
            <p>UK Modern Slavery Statement</p>
            <p>Sustainability</p>
            <p>Amazon Science</p>
          </div>
          <div className="footerBox">
            <p>Get to Know Us</p>
            <p>Careers</p>
            <p>About Us</p>
            <p>UK Modern Slavery Statement</p>
            <p>Sustainability</p>
            <p>Amazon Science</p>
          </div>
        </div>
        <div className="lowerFooter">
          <img src="/src/assets/img/logo.png" id="footerLogo" />
          <div
            className="row"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <p>Conditions of Use & Sale</p>
            <p>Privacy Notice</p>
            <p>Cookies Notice</p>
            <p>Interest-Based Ads Notice</p>
          </div>
          <p>© 2023-2023, Not amazon.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
