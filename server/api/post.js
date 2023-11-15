const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("node:fs");
const {
  createPost,
  loadAllProducts,
  productsByCategory,
  loadAllProductByID,
  createOrder,
  loadOrders,
} = require("../functions/post");

const router = express.Router();
router.use(bodyParser.json());
router.post("/create-post", async (req, res) => {
  const { data } = req.body;
  data.forEach((element) => {
    console.log(element.category);
    createPost(
      uuidv4(),
      element.title,
      element.category,
      element.price,
      element.description,
      element.imgContents
    );
  });
});
router.get("/load-products/:category/:limit", async (req, res) => {
  try {
    const { category, limit } = req.params;
    let productsData = await loadAllProducts(category, limit);
    res.status(201).send({
      products: productsData,
    });
  } catch (err) {
    res.status(404).send({
      products: "No data avaliable",
    });
  }
});
router.get("/load-category-length/:category", async (req, res) => {
  const { category } = req.params;
  let productsDataLength = await productsByCategory(category);
  res.status(201).send({
    productsLength: productsDataLength.length,
  });
});
router.get("/:productID", async (req, res) => {
  const { productID } = req.params;
  let productData = await loadAllProductByID(productID);
  res.status(201).send({
    productData: productData,
  });
});
router.post("/order-products", async (req, res) => {
  const { products, ID } = req.body;
  let orders = JSON.parse(products);
  orders.map((obj) => {
    createOrder(obj.productInfo.productID, ID);
  });
  res.status(201).send({
    response: "Orders added",
  });
});
router.post("/get-total-orders", async (req, res) => {
  const { username } = req.body;
  if (username !== undefined) {
    let emptyArray = [];
    let products = await loadOrders(username);
    for (const el of products) {
      emptyArray.push(await loadAllProductByID(el.productID));
    }
    res.status(201).send({
      orderItems: emptyArray,
    });
  }
});
router.get("/product/:id", (req, res) => {
  const { id } = req.params;

  if (fs.existsSync(path.join(__dirname, `../Images/${id}.png`))) {
    res.sendFile(path.join(__dirname, `../Images/${id}.png`));
  } else {
    res.sendFile(path.join(__dirname, `../Images/404.png`));
  }
});

module.exports = router;
