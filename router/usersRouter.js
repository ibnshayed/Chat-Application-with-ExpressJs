// external imports
const express = require("express");
const { check } = require("express-validator");

// internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/usersValidators");

const router = express.Router();

// users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add users
router.post("/", avatarUpload, addUserValidators, addUserValidationHandler);

module.exports = router;
