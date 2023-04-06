import Nav from "../components/Nav";
import Footer from "../components/Footer";

function ProductPage() {
  return (
    <>
      <Nav></Nav>
      <div
        id="containerInduvidual"
        style={{
          backgroundColor: "white",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <section style={{ backgroundColor: "white", minHeight: "100vh" }}>
          <div className="productContainer row">
            <img src="src/assets/img/weights.png" className="productImg" />
            <div className="column" style={{ margin: "0 17px" }}>
              <p className="productTitleProductPage">
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
      <Footer></Footer>
    </>
  );
}
export default ProductPage;
