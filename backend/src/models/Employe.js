const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  serialNo: {
    type: String,
    required: true,
    unique: true,
  },
  employeeCode: {
    type: String,
    required: true,
    unique: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  employeeFatherName: {
    type: String,
    required: true,
  },
  employeeMotherName: {
    type: String,
  },
  employeeDepartment: {
    type: String,
    required: true,
  },
  employeeDesignation: {
    type: String,
    required: true,
  },
  employeeDOB: {
    type: Date,
    required: true,
    trim: true,
  },
  workingStatus: {
    type: String,
    enum: ["left", "working"],
    required: true,
  },
  leftStatus: {
    type: Date,
  },
  employeeContactNumber: {
    type: String,
    required: true,
  },
  employeeEmergencyContactNumber: {
    type: String,
  },
  employeeEmergencyContactPerson: {
    type: String,
  },
  employeeEducation: {
    type: String,
  },
  employeeSalary: {
    type: String,
    required: true,
  },
  employeeAadhaarNumber: {
    type: String,
    unique: true,
    required: true,
  },
  employeePanNumber: {
    type: String,
    unique: true,
  },
  employeeMaritialStatus: {
    type: String,
    enum: ["single", "married", "widow"],
    required: true,
  },
  employeeNomineeName: {
    type: String,
  },
  employeeNomineeAadhaarNumber: {
    type: String,
    unique: true,
  },
  employeeNomineeRelation: {
    type: String,
  },
  employeeNomineeDOB: {
    type: Date,
  },
  employeeWorkingHours: {
    type: String,
    required: true,
  },
  employeePaymentMode: {
    type: String,
    enum: ["cash", "bank"],
    required: true,
  },
  employeeAccountNumber: {
    type: String,
    unique: true,
  },
  employeeIFSCCode: {
    type: String,
  },
  employeeBankName: {
    type: String,
  },
  employeeEmail: {
    type: String,
  },
  employeePresentAddress: {
    type: String,
    required: true,
  },
  employeePermanentAddress: {
    type: String,
  },
  nameOfHOD: {
    type: String,
    required: true,
  },
  HODEmail: {
    type: String,
  },
  HODMobile: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
