import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleUserLogin() {
    try {
      const response = await fetch(BASE_URL + "/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (result.status) {
        localStorage.setItem("token", "Bearer " + result.data.token);
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <div className="w-[100%] h-[80%] flex justify-center items-center flex-col gap-10">
      <h1 className="text-3xl text-[#dcdde1] tracking-wider font-bold text-center">
        Admin Login Page
      </h1>
      <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg backdrop-brightness-110 backdrop-saturate-150 border-2 py-10 px-10 flex flex-col gap-10 border-slate-100 rounded-md w-[32%] shadow-xl">
        <div className="flex justify-between items-center">
          <label htmlFor="email" className="text-lg text-[#dcdde1]">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email:"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-white bg-transparent tracking-wider outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
          />
        </div>
        <div className="flex justify-between items-center relative">
          <label htmlFor="password" className="text-lg text-[#dcdde1]">
            Password:
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter your password:"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-white bg-transparent tracking-wider outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
          />
          {passwordVisible ? (
            <i
              className="fa-solid fa-eye absolute right-4"
              onClick={() => setPasswordVisible(false)}
            ></i>
          ) : (
            <i
              className="fa-regular fa-eye-slash absolute right-4"
              onClick={() => setPasswordVisible(true)}
            ></i>
          )}
        </div>
        <div className="flex gap-3 items-center justify-center">
          <button
            onClick={handleUserLogin}
            className="text-md bg-[#8b5cf64d] tracking-wide py-2 px-7 rounded-md text-white hover:scale-x-105 duration-100 hover:bg-[#522fa170]"
          >
            Login User
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
