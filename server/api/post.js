const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const {
  createPost,
  loadAllProducts,
  loadAllProductsLength,
  loadAllProductByID,
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
router.post("/load-products", async (req, res) => {
  const { category, limit } = req.body;
  let productsData = await loadAllProducts(category, limit);
  res.status(201).send({
    products: productsData,
  });
});
router.post("/load-products-length", async (req, res) => {
  const { category } = req.body;
  let productsDataLength = await loadAllProductsLength(category);
  res.status(201).send({
    productsLength: productsDataLength,
  });
});
router.post("/load-products-productID", async (req, res) => {
  const { productID } = req.body;
  let productData = await loadAllProductByID(productID);
  res.status(201).send({
    productData: productData,
  });
});

module.exports = router;
