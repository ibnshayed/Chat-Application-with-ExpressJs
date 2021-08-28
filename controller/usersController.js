// get login page
const getUsers = (req, res, next) => {
  // res.render('users', {
  // 	title: 'Users - Chat Aplication',
  // })

  res.render("users");
};

module.exports = {
  getUsers,
};
