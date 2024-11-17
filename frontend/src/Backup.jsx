<div className="border-2 py-10 px-10 flex flex-col gap-10 border-gray-500 rounded-md w-[90%]">
  {/* first row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="serialNo" className="text-lg">
        Serial Number:
      </label>
      <input
        type="text"
        name="serialNo"
        id="serialNo"
        value={formValues.serialNo}
        onChange={(e) => handleChange(e)}
        placeholder="Enter Serial Number"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeCode" className="text-lg">
        Employee Code:
      </label>
      <input
        type="text"
        name="employeeCode"
        id="employeeCode"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* second row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeName" className="text-lg">
        Employee Name:
      </label>
      <input
        type="text"
        name="employeeName"
        id="employeeName"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="gender" className="text-lg">
        Employee Gender:
      </label>
      <input
        type="text"
        name="gender"
        id="gender"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* third row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="employeeFatherName" className="text-lg">
        Employee Father Name:
      </label>
      <input
        type="text"
        name="employeeFatherName"
        id="employeeFatherName"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeMotherName" className="text-lg">
        Employee Mother Name:
      </label>
      <input
        type="text"
        name="employeeMotherName"
        id="employeeMotherName"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* fourth row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="employeeDepartment" className="text-lg">
        Employee Department:
      </label>
      <input
        type="text"
        name="employeeDepartment"
        id="employeeDepartment"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeDesignation" className="text-lg">
        Employee Designation:
      </label>
      <input
        type="text"
        name="employeeDesignation"
        id="employeeDesignation"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* fifth row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="employeeDOB" className="text-lg">
        Employee DOB:
      </label>
      <input
        type="text"
        name="employeeDOB"
        id="employeeDOB"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="workingStatus" className="text-lg">
        Working Status:
      </label>
      <input
        type="text"
        name="workingStatus"
        id="workingStatus"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* sixth row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="leftStatus" className="text-lg">
        Left Status:
      </label>
      <input
        type="text"
        name="leftStatus"
        id="leftStatus"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeContactNumber" className="text-lg">
        Employee Contact Number:
      </label>
      <input
        type="text"
        name="employeeContactNumber"
        id="employeeContactNumber"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* seventh row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="employeeEmergencyContactNumber" className="text-lg">
        Employee Emergency Contact Number:
      </label>
      <input
        type="text"
        name="employeeEmergencyContactNumber"
        id="employeeEmergencyContactNumber"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeEmergencyContactPerson" className="text-lg">
        Employee Emergency Contact Person:
      </label>
      <input
        type="text"
        name="employeeEmergencyContactPerson"
        id="employeeEmergencyContactPerson"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* eight row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="employeeEducation" className="text-lg">
        Employee Education:
      </label>
      <input
        type="text"
        name="employeeEducation"
        id="employeeEducation"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeSalary" className="text-lg">
        Employee Salary:
      </label>
      <input
        type="text"
        name="employeeSalary"
        id="employeeSalary"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* ninth row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="employeeAadhaarNumber" className="text-lg">
        Employee Aadhaar Number:
      </label>
      <input
        type="text"
        name="employeeAadhaarNumber"
        id="employeeAadhaarNumber"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeePanNumber" className="text-lg">
        Employee Pan Number:
      </label>
      <input
        type="text"
        name="employeePanNumber"
        id="employeePanNumber"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* tenth row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="employeeMaritialStatus" className="text-lg">
        Employee Maritial Status:
      </label>
      <input
        type="text"
        name="employeeMaritialStatus"
        id="employeeMaritialStatus"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeNomineeName" className="text-lg">
        Employee Nominee Name:
      </label>
      <input
        type="text"
        name="employeeNomineeName"
        id="employeeNomineeName"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* elevent row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeNomineeAadhaarNumber" className="text-lg">
        Employee Nominee Aadhaar Number:
      </label>
      <input
        type="text"
        name="employeeNomineeAadhaarNumber"
        id="employeeNomineeAadhaarNumber"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeNomineeRelation" className="text-lg">
        Employee Nominee Relation:
      </label>
      <input
        type="text"
        name="employeeNomineeRelation"
        id="employeeNomineeRelation"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* twelth row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="employeeNomineeDOB" className="text-lg">
        Employee Nominee DOB:
      </label>
      <input
        type="text"
        name="employeeNomineeDOB"
        id="employeeNomineeDOB"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeWorkingDuration" className="text-lg">
        Employee Working Duration:
      </label>
      <input
        type="text"
        name="employeeWorkingDuration"
        id="employeeWorkingDuration"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* 13th row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="employeeWorkingHours" className="text-lg">
        Employee Working Hours:
      </label>
      <input
        type="text"
        name="employeeWorkingHours"
        id="employeeWorkingHours"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeePaymentMode" className="text-lg">
        Employee Payment Mode:
      </label>
      <input
        type="text"
        name="employeePaymentMode"
        id="employeePaymentMode"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* 14th row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="employeeAccountNumber" className="text-lg">
        Employee Account Number:
      </label>
      <input
        type="text"
        name="employeeAccountNumber"
        id="employeeAccountNumber"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeIFSCCode" className="text-lg">
        Employee IFSC Code:
      </label>
      <input
        type="text"
        name="employeeIFSCCode"
        id="employeeIFSCCode"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* 15th row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="employeeBankName" className="text-lg">
        Employee Bank Name:
      </label>
      <input
        type="text"
        name="employeeBankName"
        id="employeeBankName"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeeEmail" className="text-lg">
        Employee Email:
      </label>
      <input
        type="text"
        name="employeeEmail"
        id="employeeEmail"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* 16th row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="employeePresentAddress" className="text-lg">
        Employee Present Address:
      </label>
      <input
        type="text"
        name="employeePresentAddress"
        id="employeePresentAddress"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="employeePermanentAddress" className="text-lg">
        Employee Permanent Address:
      </label>
      <input
        type="text"
        name="employeePermanentAddress"
        id="employeePermanentAddress"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* 17th row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="nameOfHOD" className="text-lg">
        Name Of HOD:
      </label>
      <input
        type="text"
        name="nameOfHOD"
        id="nameOfHOD"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
    <div className="flex justify-between items-center w-[40%]">
      <label htmlFor="HODEmail" className="text-lg">
        HOD Email:
      </label>
      <input
        type="text"
        name="HODEmail"
        id="HODEmail"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
  {/* 18th row */}
  <div className="flex justify-between mt-5">
    <div className="flex justify-between w-[40%] items-center">
      <label htmlFor="HODMobile" className="text-lg">
        HOD Mobile:
      </label>
      <input
        type="text"
        name="HODMobile"
        id="HODMobile"
        className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
      />
    </div>
  </div>
</div>;
