const Router = require("express");
const { createUser, getUsers, updateUser } = require("./user.controller");

const router = Router();

router.post("/create", createUser);
router.put("/update", updateUser);
router.get("/getAll", getUsers);

module.exports = router;
