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
      <div id="container">
        {/* <SignIn></SignIn> */}
        <Register></Register>
      </div>
    </div>
  );
}

export default App;
