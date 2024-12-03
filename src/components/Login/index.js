import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
        // email:email,
        // password:password
      });
      localStorage.setItem("token", response.data.token);
      navigate("/")
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed", error);
      toast("Invalid credentials");
    }
  };

  return (
    <div
      to={"/login"}
      className="min-h-screen flex items-center justify-center bg-[#080710]"
    >
      <div className=" absolute flex items-center justify-center w-[430px] h-[520px]">
        <div className=" relative top-[-200px] left-[-100px] w-[200px] h-[200px] bg-gradient-to-br from-[#1845ad] to-[#23a2f6] rounded-full"></div>
        <div className="relative bottom-[-200px] right-[-100px] w-[200px] h-[200px] bg-gradient-to-r from-[#ff512f] to-[#f09819] rounded-full"></div>
      </div>

      <form
        onSubmit={handleLogin}
        className=" z-10 w-[400px] bg-white bg-opacity-10  p-8 rounded-lg border border-white/10 shadow-lg"
      >
        <h3 className="text-3xl font-semibold text-center text-white">
          Login Here
        </h3>

        <label
          className="block mt-8 text-white text-sm font-medium"
          htmlFor="username"
        >
          Username
        </label>
        <input
          type="text"
          id="email"
          placeholder="Email or Phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-2 p-3 bg-white bg-opacity-5 text-white rounded-md placeholder-gray-300 focus:outline-none"
        />

        <label
          className="block mt-6 text-white text-sm font-medium"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-2 p-3 bg-white bg-opacity-5 text-white rounded-md placeholder-gray-300 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full mt-8 p-4 text-lg font-semibold text-[#080710] bg-white rounded-md hover:bg-gray-200"
        >
          Log In
        </button>

        <div className="flex items-center justify-between mt-8">
          <div className="w-[150px] p-3 text-center bg-white bg-opacity-30 text-white rounded-md cursor-pointer hover:bg-opacity-50">
            <i className="fab fa-google mr-2"></i> Google
          </div>
          <div className="w-[150px] p-3 text-center bg-white bg-opacity-30 text-white rounded-md cursor-pointer hover:bg-opacity-50">
            <i className="fab fa-facebook mr-2"></i> Facebook
          </div>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
