import Nav from "../components/Nav";

import Footer from "../components/Footer";

function ProductInduvidual() {
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
        <section style={{ paddingTop: "40px" }}>
          <div className="row" id="productRow">
            <div className="row">
              <div className="imgRow">
                <img
                  src="src/assets/img/weights.png"
                  alt=""
                  className="imgColumn"
                />
              </div>
              <div className="bigImgContainer"></div>
            </div>

            <div className="productDescriptionBox column">
              <p className="productTitleProductPage">
                Sony PlayStation DualShock 4 Controller - Black
              </p>
              <p style={{ fontSize: "13px" }}>
                {" "}
                <b>Category: Weights</b>
              </p>
              <hr style={{ margin: "10px 0" }} />
              <p className="productTitleProductPage">£39.99</p>
              <ul className="productList">
                <li className="productPoint">
                  <b>Product name:</b>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore cupiditate rem incidunt consectetur molestias ut
                  assumenda minima provident facere voluptatum ex fuga ipsum
                  accusantium, atque, dolor facilis ipsam magni laborum.
                </li>
              </ul>
            </div>
            <div className="checkoutBox column" id="productPageCheckoutBox">
              <p className="productTitleProductPage">£72.55</p>
              <p>FREE delivery Monday, April 17. Details</p>
              <p>In stock</p>
              <p>
                EU products may differ from UK products. Additional terms apply.
                Learn More.
              </p>
              <div className="row " style={{ margin: "10px 0" }}>
                <p>Quantity</p>
                <select name="" id="" style={{ marginLeft: "10px" }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div className="yellowBtn">Add to basekt</div>
            </div>
          </div>
          <p className="contentCardTitle" style={{ marginTop: "20px" }}>
            Browse other products on discount you may like
          </p>
          <div className="row" style={{ margin: "20px 0" }}>
            <div className="imgAndText">
              <div
                className="circleImg"
                style={{ backgroundColor: "#e3e6e6" }}
              ></div>
              <div
                className="row alignItemsCenter"
                style={{ margin: "10px 0" }}
              >
                <div className="discountLabel" style={{ fontSize: "12px" }}>
                  50% Off
                </div>
                <p
                  style={{
                    color: "#cc0c39",
                    fontWeight: "bold",
                  }}
                >
                  Deal
                </p>
              </div>
              <p
                style={{
                  fontWeight: "bold",
                  padding: "0px 0",
                }}
              >
                {}obj.price
              </p>
              <p className="productTitleSmall">{}obj.title</p>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
export default ProductInduvidual;
