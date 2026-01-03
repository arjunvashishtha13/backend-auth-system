const db = require("../config/db");

const createUser = (name, email, hashedPassword) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(query, [name, email, hashedPassword], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]); // undefined if not found
    });
  });
};

module.exports = { createUser, findUserByEmail };
