import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex font-medium sm:gap-6 gap-4 p-4 bg-gray-400 fixed top-0 w-full">
      <div className=" flex  gap-5 flex-grow cursor-pointer">
        Shoping
        <Link to={"/add-product"}>
          <li className="list-none cursor-pointer  hover:underline-offset-2 decoration-black transition duration-700 ease-in-out  hover:text-white">
            Add Products
          </li>
        </Link>
      </div>
      <Link to={"/"}>
        <li className="list-none cursor-pointer hover:text-white">Home</li>
      </Link>
      <Link to={"/shopingcart"}>
        <li className="list-none cursor-pointer hover:text-white">Cart</li>
      </Link>
      <li
        onClick={handleLogout}
        className="list-none cursor-pointer hover:text-white"
      >
        Logout
      </li>
    </div>
  );
};

export default Navbar;
