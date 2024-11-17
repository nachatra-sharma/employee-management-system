const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/server-config");

function handleUserAuth(req, res, next) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error("Invalid Auth token");
    }
    const token = authorization.split(" ")[1];
    if (!token) {
      throw new Error("Invalid Token");
    }
    const isTokenValid = jwt.verify(token, JWT_SECRET);
    const email = isTokenValid.email;
    if (!email) {
      throw new Error("Invalid Email");
    }
    req.user = email;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Invalid Token",
      data: {},
      error: error.message,
    });
  }
}

module.exports = handleUserAuth;
