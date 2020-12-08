const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserBody = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: false,
  },
};
const UserSchema = mongoose.Schema(UserBody);

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id,
      name:user.name
    },
    process.env.JWT_SECRET || "SECRETBOY",
    {
      expiresIn: 60 * 60 * 24 * 2,
    }
  );
  user.token = token;
  await user.save();
  return token;
};

UserSchema.methods.authenticate = async (email, password) => {
  if (typeof password == "undefined" || typeof email == "undefined") {
    return false;
  }
  const user = await User.findOne({
    email,
  });
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return false;
  }
  return true;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
