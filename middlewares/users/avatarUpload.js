const uploader = require("../../utilities/singleUploader");

const avatarUpload = (req, res, next) => {
  const upload = uploader(
    "avatars", // folder name
    ["image/jpeg", "image/jpg", "image/png"], // supported formats
    1000000, // max upload size in bytes - 1MB
    "Only .jpg, .jpeg and .png format allowed!" // error message
  );

  // call the middlewares function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
};

module.exports = avatarUpload;
