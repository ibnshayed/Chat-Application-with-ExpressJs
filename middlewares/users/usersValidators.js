const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const { unlink } = require("fs");

// add user
const addUserValidators = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Name is required") // if name length is less than 1
    .isAlpha("en-US", { ignore: " -" }) // ingnore space and hyphen
    .withMessage("Name must not contain anything other than alphabet") // if name is not alphabet
    .trim(), // trim is a sanitizer
  check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          throw createError("Email already in use!"); // we can get this in the next middlewares
        }
      } catch (err) {
        throw createError(err.message);
      }
    }),
  check("mobile")
    .isMobilePhone("bn-BD", { strictMode: true })
    .withMessage("Mobile number must be a valid Bangladeshi mobile number")
    .custom(async (value) => {
      try {
        const user = await User.findOne({ mobile: value });
        if (user) {
          throw createError("Mobile number is already in use!"); // we can get this in the next middlewares
        }
      } catch (err) {
        throw createError(err.message);
      }
    }),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 characters long & should contain at least 1 uppercase, 1 lowercase, 1 number & 1 symbole"
    ),
];

const addUserValidationHandler = (req, res, next) => {
  const errros = validationResult(req); // give error from validationResult
  const mappedErrors = errros.mapped(); // beautify the error messages like objects

  if (Object.keys(mappedErrors).length === 0) {
    next();
    d;
  } else {
    // remove upload files
    if (req.files.length > 0) {
      const { filename } = req.files[0];
      unlink(
        path.join(__dirname, `/../public/uploads/avatars/${filename}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }
    res.status(500).json({
      errros: mappedErrors,
    });
  }
};

module.exports = {
  addUserValidators,
  addUserValidationHandler,
  addUserValidators,
};
