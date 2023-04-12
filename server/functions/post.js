const mysql = require("mysql2");
require("dotenv").config();
const conn = mysql.createConnection(process.env.DATABASE_URL);
const createPost = async (
  productID,
  productTitle,
  category,
  price,
  productDescription,
  imgContents
) => {
  conn.query(
    "INSERT INTO products (productID,productTitle,category,price,productDescription) VALUES(?,?,?,?,?)",
    [productID, productTitle, category, price, productDescription]
  );
};

module.exports = { createPost };
