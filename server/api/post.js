const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const { createPost, loadAllProducts } = require("../functions/post");

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
  const { category } = req.body;
  console.log(category);
  loadAllProducts(category);
});

module.exports = router;
