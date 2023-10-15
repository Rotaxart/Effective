const express = require("express");
const dotenv = require("dotenv");
const router = require("./src/user.router");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", router);
app.listen(port, () => {
  console.log(`User service started on port ${port}`);
});
