const createError = require("http-errors");

// 404 not found handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, "Your requested content was not found!"));
};

// default error handler
const errorHandler = (err, req, res, next) => {
  // res.json() // json response
  // res.render('error', {
  // 	title: 'Error Page',
  // })

  // same as above
  res.locals.title = "Error Page";
  res.render("error");
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
