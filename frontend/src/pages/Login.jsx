import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleUserLogin() {
    try {
      const response = await fetch("http://localhost:7777/api/v1/login", {
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
    <div className="w-[100%] h-[100%] flex justify-center items-center flex-col gap-10">
      <h1 className="text-3xl text-[#dcdde1] tracking-wider font-bold text-center">
        Login Page
      </h1>
      <div className="border-2 py-10 px-10 flex flex-col gap-10 border-slate-500 rounded-md w-[30%]">
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
            className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
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
            className="outline-none border-[1px] rounded-md px-2 py-1 border-slate-600"
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
            className="text-md bg-gray-700 py-2 px-5 rounded-md text-white"
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
