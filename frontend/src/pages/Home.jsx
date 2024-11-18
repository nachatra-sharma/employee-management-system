import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const navigate = useNavigate();
  async function fetchEmployeeList() {
    try {
      const response = await fetch("http://localhost:7777/api/v1/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
      });
      const result = await response.json();
      if (result?.success) {
        setEmployeeList(result?.data);
      } else {
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
    }
  }
  useEffect(() => {
    fetchEmployeeList();
  }, []);
  return (
    <>
      <h1 className="text-3xl text-[#dcdde1] font-bold tracking-wider text-center">
        Employee Management System
      </h1>
      <div className="my-10">
        <div className="flex gap-3">
          <h3 className="my-10 text-lg text-[#dcdde1] font-semibold tracking-wide">
            Total Number of Employees :
          </h3>
          <p className="my-10 text-lg text-slate-200 font-semibold tracking-wide">
            {employeeList?.employeeData?.length}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-md">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Employee Code</th>
                <th>Name</th>
                <th>Department</th>
                <th>Working Status</th>
                <th>Contact Number</th>
                <th>HOD Name</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {employeeList?.employeeData?.map((employee, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{employee.employeeCode}</td>
                    <td>{employee.employeeName}</td>
                    <td>{employee.employeeDepartment}</td>
                    <td>{employee.workingStatus}</td>
                    <td>{employee.employeeContactNumber}</td>
                    <td>{employee.nameOfHOD}</td>
                    <td>
                      <Link to={`/update-employee/${employee._id}`}>
                        <i className="fa-solid fa-pen-to-square text-lg"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
