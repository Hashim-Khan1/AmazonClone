const express = require("express");
const bodyParser = require("body-parser");
const { UserExists, createUser, checkUserPass } = require("../functions/users");
const { createJWTToken, verifyJWTToken } = require("../functions/token");

const router = express.Router();
router.use(bodyParser.json());
router.post("/create-user", async (req, res) => {
  const { username, password } = req.body;
  if ((await UserExists(username)) !== false) {
    console.log("User exsists");
    res.send({
      status: 201,
      title: "ERROR",
      message: "Email already in use",
      color: "red",
    });
  } else {
    console.log("User doesnt exsit");
    await createUser(username, password);
    res.send({
      status: 201,
      title: "Successfull",
      message: "User successfully created",
      color: "green",
    });
  }
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (
    (await UserExists(username)) !== false &&
    (await checkUserPass(username, password)) == true
  ) {
    console.log("User exsists");
    let token = await createJWTToken(username);
    res.send({
      status: 201,
      title: "Successfull",
      message: "Login successful",
      color: "green",
      accessToken: token,
    });
  } else {
    res.send({
      status: 201,
      title: "Unauthorized",
      message: "Incorrect login credentials",
      color: "red",
    });
  }
});
module.exports = router;
