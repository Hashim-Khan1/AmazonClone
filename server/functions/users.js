const mysql = require("mysql2");
const bcrypt = require("bcrypt");
require("dotenv").config();
const conn = mysql.createConnection(process.env.DATABASE_URL);
const UserExists = async (username) => {
  const result = conn
    .promise()
    .query(`SELECT username from users WHERE username = ?`, [username])
    .then(([rows, fields]) => {
      console.log(rows.length);
      if (rows.length > 0) {
        const { username } = rows[0];
        // console.log(username);
        return username;
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
module.exports = { UserExists, createUser };
