import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import profile from "../assets/profile.jpeg";
import { BASE_URL } from "../utils/constant";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  async function fetchEmployeeList() {
    try {
      const response = await fetch(BASE_URL + "/api/v1/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
      });
      const result = await response.json();
      if (!result.status) {
        setIsLoggedIn(false);
        localStorage.clear("token");
        navigate("/login");
      } else {
        setIsLoggedIn(true);
      }
    } catch (error) {
      navigate("/login");
    }
  }
  useEffect(() => {
    fetchEmployeeList();
  }, []);

  function handleUserLogout() {
    localStorage.clear("token");
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <div className="navbar bg-[#3b82f699] rounded-md mb-5">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-white text-xl">
          Dwaterflo
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="profile" src={profile} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="pt-2">
                <Link to={"/create-employee"} className="justify-between">
                  Create Employee
                  <span className="badge">New</span>
                </Link>
              </li>
              <li className="pt-2" onClick={handleUserLogout}>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
