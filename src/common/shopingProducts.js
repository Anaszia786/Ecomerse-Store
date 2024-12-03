import React from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../Redux/Shoping/shopingSlice";

const ShopingProducts = (product, key) => {
  console.log("ShopingProducts -> product", product)
  const dispatch = useDispatch();
  const handleClick = (product) => {
    dispatch(setProducts(product));
  };
  return (
    <div></div>
  );
};

export default ShopingProducts;
