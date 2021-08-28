// get login page
const getLogin = (req, res, next) => {
  // res.render("index", {
  //   title: "Login - Chat Aplication",
  // });

  res.render("index");
};

module.exports = {
  getLogin,
};
