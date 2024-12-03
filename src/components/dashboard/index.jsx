import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Products from "../../Shoping/products";
import { fetchProducts } from "../../Redux/Shoping/shopingSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="my-4">
      <Products />

      {/* <Link to="/add-product">
        <button className=" bg-green-500 w-fit flex justify-center m-auto p-4">Add Products</button>
      </Link> */}
    </div>
  );
};

export default Dashboard;
