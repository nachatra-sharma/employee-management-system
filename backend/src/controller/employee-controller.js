const Employee = require("../models/Employe");

async function handleGetAllEmployee(req, res) {
  try {
    const employeeData = await Employee.find({});
    return res.json({
      success: true,
      message: "successfully get all the employee info",
      data: { employeeData },
      error: {},
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "something went wrong while getting the employee info",
      data: {},
      error: {},
    });
  }
}

async function handleCreateEmployee(req, res) {
  try {
    const data = req.body;
    console.log(data);
    if (!data) {
      throw new Error("Fill all the required fields");
    }
    const employee = await Employee.create(data);
    return res.json({
      success: true,
      message: "successfully created the user",
      data: { employee },
      error: {},
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "something went wrong while creating the employee",
      data: {},
      error: error.message,
    });
  }
}

async function handleSingleEmployee(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error("ID is not valid");
    }
    console.log(id);
    const employee = await Employee.findById({
      _id: id,
    });
    if (!employee) {
      throw new Error("User not exist");
    }
    return res.json({
      success: true,
      message: "successfully created the user",
      data: { employee },
      error: {},
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Something went wrong while getting the user info",
      data: {},
      error: error.message,
    });
  }
}

async function handleUpdateEmployee(req, res) {
  try {
    const data = req.body;
    const id = req.params.id;
    if (!id) {
      throw new Error("ID is not valid");
    }

    if (!data) {
      throw new Error("Bad request");
    }

    const employee = await Employee.findByIdAndUpdate(
      {
        _id: id,
      },
      data
    );
    console.log(employee);
    return res.status(200).json({
      success: true,
      message: "successfully update the employee table",
      data: { employee },
      error: {},
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Something went wrong while getting the user info",
      data: {},
      error: error.message,
    });
  }
}

module.exports = {
  handleGetAllEmployee,
  handleCreateEmployee,
  handleSingleEmployee,
  handleUpdateEmployee,
};
