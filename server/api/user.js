const express = require("express");
const bodyParser = require("body-parser");
const { UserExists, createUser } = require("../functions/users");

const router = express.Router();
router.use(bodyParser.json());
router.post("/create-user", async (req, res) => {
  const { username, password } = req.body;
  if ((await UserExists(username)) !== false) {
    console.log("User exsists");
  } else {
    console.log("User doesnt exsit");
    createUser(username, password);
  }
});
module.exports = router;
