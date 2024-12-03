import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, fetchProducts } from "../Redux/Shoping/shopingSlice";

const AddProduct = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [rate, setRate] = useState();
  const [count, setCount] = useState();
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      category,
      price,
      // image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      image,
      rating: {
        rate,
        count,
      },
    };
    console.log("handleSubmit -> formData", formData);
    dispatch(addProduct(formData));
    // await axios.post("https://fakestoreapi.com/products", formData);
    navigate("/");
  };
  const handleChange=(e)=>{
    const file=(e.target.files[0]);
    const imageURL = URL.createObjectURL(file);
    setImage(imageURL)
  }

  return (
    <div className="w-[400px] m-auto mt-20">
      <form
        className="flex border-2 gap-4 flex-col p-5  bottom-10 "
        onSubmit={handleSubmit}

        action=""
      >
        <input
          placeholder="category"
          className="bg-slate-200 p-2 rounded"
          name="category"
          value={category}
          type="text"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          placeholder="Upload Image"
          type="file"
          name="image"
          onChange={handleChange}
        />
        <input
          placeholder="Price"
          className="bg-slate-200 p-2 rounded"
          type="number"
          value={price}
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="Rating"
          className="bg-slate-200 p-2 rounded"
          type="number"
          value={rate}
          name="rate"
          onChange={(e) => setRate(Number(e.target.value))}
        />
        <input
          required
          placeholder="Stock"
          className="bg-slate-200 p-2 rounded"
          type="number"
          value={count}
          name="count"
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          onSubmit={handleSubmit}
          className="bg-[blue] p-1 rounded text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
