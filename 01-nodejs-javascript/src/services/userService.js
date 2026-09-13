const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const createUserService = async (name, email, password) => {
  try {
    //hash user password
    const hashPassword = await bcrypt.hash(password, saltRounds);
    //save user to database
    let result = await User.create({
      name: name,
      email: email,
      password: hashPassword,
      role: "ADMIN",
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const loginService = async (email, password) => {
  try {
    //fetch user by email
    const user = await User.findOne({ email: email });
    if (user) {
      //compare password
      const isMatchPassWord = await bcrypt.compare(password, user.password);
      if (!isMatchPassWord) {
        return {
          EC: 2,
          EM: "Email/password khong hop le",
        };
      } else {
        //created an access token
        return "create an access token";
      }
    } else {
      return {
        EC: 1,
        EM: "Email/password không hợp lệ",
      };
    }
    //save user to database
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createUserService,
  loginService,
};
