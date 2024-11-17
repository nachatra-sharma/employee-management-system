import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
      if (result.success) {
        setEmployeeList(result.data);
      } else {
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
    }
  }
  console.log(employeeList);
  useEffect(() => {
    fetchEmployeeList();
  }, []);
  return (
    <>
      <h1 className="text-3xl text-[#dcdde1] font-bold tracking-wider text-center">
        Employee Management System
      </h1>
      <div className="my-10">
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
