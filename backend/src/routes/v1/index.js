const express = require("express");
const router = express.Router();
const {
  handleUserLogin,
  handleCurrentUser,
} = require("../../controller/user-controller");
const {
  handleGetAllEmployee,
  handleCreateEmployee,
  handleSingleEmployee,
  handleUpdateEmployee,
} = require("../../controller/employee-controller");
const handleUserAuth = require("../../middlewares/auth");

// employee routes
router.post("/create-employee", handleUserAuth, handleCreateEmployee);
router.get("/", handleUserAuth, handleGetAllEmployee);
router.get("/employee/:id", handleUserAuth, handleSingleEmployee);
router.patch("/update-employee/:id", handleUserAuth, handleUpdateEmployee);

// user routes
router.post("/login", handleUserLogin);
router.get("/user", handleUserAuth, handleCurrentUser);

module.exports = router;
