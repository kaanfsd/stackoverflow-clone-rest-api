const express = require("express");
const{getSingleUser, getAllUsers} = require("../controllers/user.js");
const {checkUserExist} = require("../middlewares/database/databaseErrorHelpers");
const { route } = require("./auth.js");
const userQueryMiddleware = require("../middlewares/query/userQueryMiddleware");
const User = require("../models/User");


const router = express.Router();

router.get("/",userQueryMiddleware(User),getAllUsers);
router.get("/:id",checkUserExist,getSingleUser);
module.exports = router;

