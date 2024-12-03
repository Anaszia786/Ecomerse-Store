import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/Shoping/shopingSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  const handleRemove = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <p className="text-center text-green-700 font-semibold text-2xl">Cart</p>
      <div className="grid grid-cols-6 place-items-center gap-5 py-10 ">
        {products?.map((product,index) => (
          // <div className="bg-neutral-400  rounded">
          //   <p className="text-center pt-3 font-semibold">
          //     {product.category.toUpperCase()}
          //   </p>
          //   <div className="p-3">
          //     <img
          //       className="w-[200px] h-[200px] rounded"
          //       src={product.image}
          //       alt=""
          //     />
          //   </div>
          //   <div className="flex justify-around">
          //     <p className="">PRICE: {product.price}</p>
          //     <p className="text-[blue] font-semibold">
          //       Rating {product.rating?.rate}
          //     </p>
          //   </div>
          //   <div className="flex justify-around items-center p-2">
          //     <p>STOCK: {product.rating?.count}</p>
          //     <button
          //       onClick={() => handleRemove(product.id)}
          //       className="text-center hover:text-white bg-amber-300 rounded p-1"
          //     >
          //       Remove
          //     </button>
          //   </div>
          // </div>
          <div key={index} className=" bg-white shadow rounded">
            <div
              className=" transition duration-500 ease-in-out hover:scale-105 h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="flex justify-end">
                <Link to={"/payment"}
                  className="inline-flex"
                  href
                >
                  <span className="h-8 flex items-center cursor-pointer justify uppercase font-semibold px-2 border text-green-300 border-white hover:border-green-300 hover:bg-black hover:text-white transition duration-500 ease-in-out">
                    shop
                  </span>
                </Link>
              </div>
            </div>
            <div className="p-4 flex flex-col items-center">
              <p className="text-gray-400 font-light text-xs text-center">
                {product.category}
              </p>
              <h1 className="text-gray-800 text-center mt-1">{product.name}</h1>{" "}
              <p className="text-center text-gray-800 mt-1">{product.price}</p>{" "}
              <div className="inline-flex items-center mt-2">
                <button
                  onClick={() =>
                    setNum((prev) => (prev - 1 !== 0 ? prev - 1 : prev))
                  }
                  className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                  {num}
                </div>
                <button
                  onClick={(e) => setNum(num + 1)}
                  className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
              <button
                onClick={() => {
                  handleRemove(product.id);
                }}
                className=" transition duration-500 ease-in-out hover:scale-105 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
              >
                Remove from cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
