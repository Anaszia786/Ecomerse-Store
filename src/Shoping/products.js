import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Shoping/shopingSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.products.cart);

  const dispatch = useDispatch();

  const handleClick = (product) => {
    if (cart.find((prod) => prod.id === product.id)) {
      toast("Product is Already in Cart");
    } else {
      dispatch(addToCart(product));
      toast("Product added to Cart");
    }
  };

  return (
    <>
      <p className="text-center text-2xl font-bold">Home</p>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center px-5 gap-5 py-10 ">
        {products?.map((product) => {
          const isInCart = cart.some((item) => item.id === product.id);
          return (
            <div key={product.id} className="sm:w-48 w-44 bg-white shadow rounded">
              <div
                className="border-b-2 border-green-600 transition duration-500 ease-in-out hover:scale-105 h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div>
                  <span className="cursor-not-allowed uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                    Available
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col items-center">
                <p className="text-gray-400 font-light text-xs text-center">
                  {product.category}
                </p>
                <h1 className="text-gray-800 text-center mt-1">
                  {product.name}
                </h1>
                <p className="text-center text-gray-800 mt-1">{`$${product.price}`}</p>
                <button
                  onClick={() => handleClick(product)}
                  className={`transition duration-500 ease-in-out hover:scale-105 py-2 px-4 text-white rounded disabled:opacity-50 mt-4 w-full flex items-center justify-center ${
                    isInCart
                      ? "bg-green-600"
                      : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                  }`}
                >
                  {isInCart ? "ADDED" : "Add to cart"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </>
  );
};

export default Products;
