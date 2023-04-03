import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import FirstSection from "./layouts/FirstSection";
import SecondSection from "./layouts/SecondSection";
import ThirdSection from "./layouts/ThirdSection";

function App() {
  const [count, setCount] = useState(0);
  const footerContent = [
    {
      title: "Get to Know Us",
      others: [
        "Careers",
        "About Us",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
      ],
    },
    {
      title: "Make Money with Us",
      others: [
        "Careers",
        "About Us",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
      ],
    },
    {
      title: "Amazon Payment Methods",
      others: [
        "Careers",
        "About Us",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
      ],
    },
    {
      title: "Let Us Help You",
      others: [
        "Careers",
        "About Us",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
        "UK Modern Slavery Statement",
        "Sustainability",
        "Amazon Science",
      ],
    },
  ];
  const loadData = (objData: any) => {
    return objData.map((obj: any) => {
      return (
        <div className="footerBox">
          <p>{obj.title}</p>
          {obj.others.map((item: any) => {
            return <p>{item}</p>;
          })}
          <p></p>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <Nav></Nav>
      <div id="backgroundImg"></div>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <footer className="column">
        <div className="upperFooter">{loadData(footerContent)}</div>
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
