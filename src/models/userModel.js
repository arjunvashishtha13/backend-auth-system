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

module.exports = { createUser };
