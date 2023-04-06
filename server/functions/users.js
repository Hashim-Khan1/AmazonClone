const mysql = require("mysql2");
const bcrypt = require("bcrypt");
require("dotenv").config();
const conn = mysql.createConnection(process.env.DATABASE_URL);
const UserExists = async (username) => {
  const result = conn
    .promise()
    .query(`SELECT * from users WHERE username = ?`, [username])
    .then(([rows, fields]) => {
      if (rows.length > 0) {
        return rows[0];
      } else {
        return false;
      }
    });
  return result;
};
const createUser = async (username, password) => {
  const passwordHash = async (password) => {
    // console.log(password, "plain password");
    const hash = bcrypt.hashSync(password, 12);
    return hash;
  };
  let passwordHashed = await passwordHash(password);
  conn.query("INSERT INTO users (username,password) VALUES(?,?)", [
    username,
    passwordHashed,
  ]);
};
const checkUserPass = async (usernameUser, passwordUser) => {
  let { password } = await UserExists(usernameUser);
  console.log(username);
  console.log(password);
  const res = bcrypt.compareSync(passwordUser, password);
  return res;
};

module.exports = { UserExists, createUser, checkUserPass };
