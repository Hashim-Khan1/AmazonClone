const mysql = require("mysql2");
require("dotenv").config();
const conn = mysql.createConnection(process.env.DATABASE_URL);

const createPost = async (
  productID,
  productTitle,
  category,
  price,
  productDescription
) => {
  conn.query(
    "INSERT INTO products (productID,productTitle,category,price,productDescription) VALUES(?,?,?,?,?)",
    [productID, productTitle, category, price, productDescription]
  );
};
const loadAllProducts = async (whatToLoad, limit) => {
  const rowsPerPage = 4;
  const startLimit = (limit - 1) * rowsPerPage;
  const endLimit = rowsPerPage;

  const res = await conn
    .promise()
    .query("SELECT * FROM products WHERE category = ? LIMIT ?, ?", [
      whatToLoad,
      startLimit,
      endLimit,
    ])
    .then(([rows, fields]) => {
      if (rows.length > 0) {
        return rows;
      } else {
        return false;
      }
    });
  return res;
};
const productsByCategory = async (whatToLoad) => {
  const res = await conn
    .promise()
    .query("SELECT * FROM products WHERE category = ?", [whatToLoad])
    .then(([rows, fields]) => {
      if (rows.length > 0) {
        return rows;
      } else {
        return false;
      }
    });
  return res;
};
const loadAllProductByID = async (whatToLoad) => {
  const res = await conn
    .promise()
    .query("SELECT * FROM products WHERE productID = ?", [whatToLoad])
    .then(([rows, fields]) => {
      if (rows.length > 0) {
        return rows[0];
      } else {
        return false;
      }
    });
  return res;
};

const loadOrders = async (username) => {
  const res = await conn
    .promise()
    .query("SELECT * FROM orders WHERE orderdBy = ?", [username])
    .then(([rows, fields]) => {
      if (rows.length > 0) {
        return rows;
      } else {
        return false;
      }
    });
  return res;
};

const createOrder = async (productID, orderedBy) => {
  conn.query("INSERT INTO orders (productID,orderdBy) VALUES(?,?)", [
    productID,
    orderedBy,
  ]);
};
module.exports = {
  createPost,
  loadAllProducts,
  productsByCategory,
  loadAllProductByID,
  createOrder,
  loadOrders,
};
