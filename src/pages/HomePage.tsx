import Nav from "../components/Nav";
import FirstSection from "../layouts/FirstSection";
import SecondSection from "../layouts/SecondSection";
import ThirdSection from "../layouts/ThirdSection";
import Footer from "../components/Footer";
import { useState } from "react";
function HomePage() {
  const [navItems, setNavItems] = useState();
  const lowerNavArray = [
    "Sports",
    "Fragrances",
    "Mobile phones",
    "Tablets",
    "TV",
    "Consoles",
    "Food",
    "Books",
    "Audio devices",
    "Video Games",
    "PC",
  ];
  return (
    <>
      <Nav></Nav>
      <div id="backgroundImg"></div>
      <FirstSection></FirstSection>
      <SecondSection navItems={lowerNavArray}></SecondSection>
      <ThirdSection></ThirdSection>

      <Footer></Footer>
    </>
  );
}
export default HomePage;
