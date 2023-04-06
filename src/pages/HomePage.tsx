import Nav from "../components/Nav";
import FirstSection from "../layouts/FirstSection";
import SecondSection from "../layouts/SecondSection";
import ThirdSection from "../layouts/ThirdSection";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <>
      <Nav></Nav>
      <div id="backgroundImg"></div>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>

      <Footer></Footer>
    </>
  );
}
export default HomePage;
