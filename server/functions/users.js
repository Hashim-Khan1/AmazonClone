const mysql = require("mysql2");
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
module.exports = { UserExists };
