const db = require("./db");
const queries = require("./user.queries");
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

const createUser = async ({ username, password, email }) => {
  const newUser = await db.query(queries.createUser, [
    username,
    password,
    email,
  ]);
  emitEvent("create", newUser.rows[0].id);
  return newUser.rows[0];
};

const getUsers = async () => {
  const users = await db.query(queries.getAllUsers);
  return users.rows;
};

const updateUser = async ({ id, username, password, email }) => {
  const updated = await db.query(queries.updateUser, [
    id,
    username,
    password,
    email,
  ]);
  emitEvent("update", id);
  return updated.rows[0];
};

const emitEvent = async (eventName, user) => {
  try {
    await axios.post(process.env.HISTORY_URL, {
      event: eventName,
      user_id: user,
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { createUser, getUsers, updateUser };
