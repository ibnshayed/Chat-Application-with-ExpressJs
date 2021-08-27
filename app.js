// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

const app = express();
dotenv.config(); // now process.env.something is accessible in the entire application

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connection successfull!"));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for html form handle

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET)); // secret for signed cookie

// router setup

// 404 not found handler
app.use(notFoundHandler);

// common error handling
app.use(errorHandler);

// app run
app.listen(process.env.PORT, () => {
  console.log(`app listening on port http://localhost:${process.env.PORT}`);
});
