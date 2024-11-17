const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/server-config");
const User = require("../models/User");

async function handleCurrentUser(req, res) {
  try {
    const email = req.user;
    if (!email) {
      throw new Error("Please login");
    }
    const user = await User.findOne({
      email: email,
    }).select("-password");

    console.log("current user", user);
    return res.json({
      status: true,
      message: "successfully fetched the user info",
      data: { user },
      error: {},
    });
  } catch (error) {
    return res.json({
      status: false,
      message: "something went wrong while getting the user info",
      data: {},
      error: {},
    });
  }
}

async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        status: false,
        message: "Input are not valid",
        data: {},
        error: {},
      });
    }
    const isCredentialsValid = await User.findOne({
      email: email,
      password: password,
    }).select("-password");
    if (!isCredentialsValid._id) {
      return res.json({
        status: false,
        message: "Invalid Credentials",
        data: {},
        error: {},
      });
    }
    const token = jwt.sign({ email: email }, JWT_SECRET);
    return res.json({
      status: true,
      message: "User logged in successfully",
      data: { isCredentialsValid, token },
      error: {},
    });
  } catch (error) {
    return res.json({
      status: false,
      message: "something went wrong while logging the user",
      data: {},
      error: {},
    });
  }
}

module.exports = { handleCurrentUser, handleUserLogin };
