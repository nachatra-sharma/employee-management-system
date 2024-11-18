import { useState } from "react";
const FormTable = () => {
  const fields = [
    {
      label: "Serial Number",
      name: "serialNo",
      required: true,
      type: "number",
    },
    {
      label: "Employee Code",
      name: "employeeCode",
      required: true,
      type: "text",
    },
    {
      label: "Employee Name",
      name: "employeeName",
      required: true,
      type: "text",
    },
    {
      label: "Employee Gender",
      name: "gender",
      required: true,
      type: "text",
      enum: ["male", "female"],
    },
    {
      label: "Employee Father Name",
      name: "employeeFatherName",
      required: true,
      type: "text",
    },
    {
      label: "Employee Mother Name",
      name: "employeeMotherName",
      required: false,
      type: "text",
    },
    {
      label: "Employee Department",
      name: "employeeDepartment",
      required: true,
      type: "text",
    },
    {
      label: "Employee Designation",
      name: "employeeDesignation",
      required: true,
      type: "text",
    },
    {
      label: "Employee DOB",
      name: "employeeDOB",
      required: true,
      type: "date",
    },
    {
      label: "Working Status",
      name: "workingStatus",
      required: true,
      type: "text",
      enum: ["left", "working"],
    },
    {
      label: "Left Status",
      name: "leftStatus",
      required: false,
      type: "date",
    },
    {
      label: "Employee Contact Number",
      name: "employeeContactNumber",
      required: true,
      type: "tel",
    },
    {
      label: "Employee Emergency Contact Number",
      name: "employeeEmergencyContactNumber",
      required: false,
      type: "tel",
    },
    {
      label: "Employee Emergency Contact Person",
      name: "employeeEmergencyContactPerson",
      required: false,
      type: "text",
    },
    {
      label: "Employee Education",
      name: "employeeEducation",
      required: false,
      type: "text",
    },
    {
      label: "Employee Salary",
      name: "employeeSalary",
      required: true,
      type: "number",
    },
    {
      label: "Employee Aadhaar Number",
      name: "employeeAadhaarNumber",
      required: true,
      type: "text",
    },
    {
      label: "Employee Pan Number",
      name: "employeePanNumber",
      required: false,
      type: "text",
    },
    {
      label: "Employee Marital Status",
      name: "employeeMaritialStatus",
      required: true,
      type: "text",
      enum: ["single", "married", "widow"],
    },
    {
      label: "Employee Nominee Name",
      name: "employeeNomineeName",
      required: false,
      type: "text",
    },
    {
      label: "Employee Nominee Aadhaar Number",
      name: "employeeNomineeAadhaarNumber",
      required: false,
      type: "text",
    },
    {
      label: "Employee Nominee Relation",
      name: "employeeNomineeRelation",
      required: false,
      type: "text",
    },
    {
      label: "Employee Nominee DOB",
      name: "employeeNomineeDOB",
      required: false,
      type: "date",
    },
    {
      label: "Employee Working Hours",
      name: "employeeWorkingHours",
      required: true,
      type: "text",
    },
    {
      label: "Employee Payment Mode",
      name: "employeePaymentMode",
      required: true,
      type: "text",
      enum: ["cash", "bank"],
    },
    {
      label: "Employee Account Number",
      name: "employeeAccountNumber",
      required: false,
      type: "number",
    },
    {
      label: "Employee IFSC Code",
      name: "employeeIFSCCode",
      required: false,
      type: "text",
    },
    {
      label: "Employee Bank Name",
      name: "employeeBankName",
      required: false,
      type: "text",
    },
    {
      label: "Employee Email",
      name: "employeeEmail",
      required: false,
      type: "email",
    },
    {
      label: "Employee Present Address",
      name: "employeePresentAddress",
      required: true,
      type: "text",
    },
    {
      label: "Employee Permanent Address",
      name: "employeePermanentAddress",
      required: false,
      type: "text",
    },
    { label: "Name of HOD", name: "nameOfHOD", required: true, type: "text" },
    { label: "HOD Email", name: "HODEmail", required: false, type: "email" },
    { label: "HOD Mobile", name: "HODMobile", required: true, type: "tel" },
  ];

  const [formValues, setFormValues] = useState({
    serialNo: "",
    employeeCode: "",
    employeeName: "",
    gender: "",
    employeeFatherName: "",
    employeeMotherName: "",
    employeeDepartment: "",
    employeeDesignation: "",
    employeeDOB: "",
    workingStatus: "",
    leftStatus: "",
    employeeContactNumber: "",
    employeeEmergencyContactNumber: "",
    employeeEmergencyContactPerson: "",
    employeeEducation: "",
    employeeSalary: "",
    employeeAadhaarNumber: "",
    employeePanNumber: "",
    employeeMaritialStatus: "",
    employeeNomineeName: "",
    employeeNomineeAadhaarNumber: "",
    employeeNomineeRelation: "",
    employeeNomineeDOB: "",
    employeeWorkingDuration: "",
    employeeWorkingHours: "",
    employeePaymentMode: "",
    employeeAccountNumber: "",
    employeeIFSCCode: "",
    employeeBankName: "",
    employeeEmail: "",
    employeePresentAddress: "",
    employeePermanentAddress: "",
    nameOfHOD: "",
    HODEmail: "",
    HODMobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      [
        "serialNo",
        "employeeCode",
        "employeeContactNumber",
        "employeeSalary",
        "employeeAadhaarNumber",
        "employeePanNumber",
        "employeeNomineeAadhaarNumber",
        "employeeAccountNumber",
        "employeeWorkingHours",
        "HODMobile",
      ].includes(name)
    ) {
      // Convert value to number
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value ? Number(value) : "",
      }));
    } else {
      // For other fields, update normally
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:7777/api/v1/create-employee",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(formValues),
      }
    );
    const result = await response.json();
    console.log(result);
  };
  return (
    <>
      <div className="flex gap-5 flex-col items-center w-[90%]">
        <div className="border-2 py-10 px-10 flex flex-wrap gap-10 border-gray-500 rounded-md w-[90%]">
          {fields.map((field, index) => (
            <div className="flex justify-between mt-5 w-[100%]" key={index}>
              <label htmlFor={field.name} className="text-lg w-[40%]">
                {field.label}:
                {field.required && <span style={{ color: "red" }}> *</span>}
              </label>
              {field.enum ? (
                <select
                  name={field.name}
                  id={field.name}
                  value={formValues[field.name]}
                  onChange={(e) => handleChange(e)}
                  className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600 w-[40%]"
                >
                  {field.enum.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={formValues[field.name]}
                  onChange={(e) => handleChange(e)}
                  placeholder={`Enter ${field.label}`}
                  {...(field.required ? { required: true } : {})}
                  className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600 w-[40%]"
                />
              )}
            </div>
          ))}
        </div>
        <button
          className="text-md bg-gray-700 py-2 px-5 w-[90%] rounded-md text-white"
          onClick={(e) => handleSubmit(e)}
        >
          Create User
        </button>
      </div>
    </>
  );
};

export default FormTable;
