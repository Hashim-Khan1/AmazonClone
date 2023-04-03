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
      <Nav></Nav>
      <div id="backgroundImg"></div>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
