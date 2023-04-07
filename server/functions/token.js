require("dotenv").config();

const jwt = require("jsonwebtoken");

const createJWTToken = async function (username) {
  const token = jwt.sign({ id: username }, process.env.ACCESS_TOKEN, {
    expiresIn: "30d",
  });
  return token;
};
const verifyJWTToken = function (value) {
  const verify = jwt.verify(value, process.env.ACCESS_TOKEN, (err, data) => {
    if (err) return err;
    return data;
  });
  return verify;
};
module.exports = { createJWTToken, verifyJWTToken };
