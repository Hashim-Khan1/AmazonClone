const express = require("express");
const bodyParser = require("body-parser");
const { UserExists, createUser } = require("../functions/users");

const router = express.Router();
router.use(bodyParser.json());
router.post("/create-user", async (req, res) => {
  const { username, password } = req.body;
  if ((await UserExists(username)) !== false) {
    console.log("User exsists");
    res.send({
      status: 201,
      message: "Email already in use",
      color: "red",
    });
  } else {
    console.log("User doesnt exsit");
    await createUser(username, password);
    res.send({
      status: 201,
      message: "User successfully created",
      color: "green",
    });
  }
});
module.exports = router;
