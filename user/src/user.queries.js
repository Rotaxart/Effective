const createUser = `INSERT INTO users (username, password, email) values ($1, $2, $3) RETURNING *`;
const getAllUsers = `SELECT * FROM users`;
const updateUser = `UPDATE users set username = $2, password = $3, email = $4 where id = $1 RETURNING *`;
module.exports = { createUser, getAllUsers, updateUser };
