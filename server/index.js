const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

require("dotenv").config();

const routes = require("./api/index");
routes(app, { urlencodedParser });
const PORT = 3000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on: ${PORT} `);
});
