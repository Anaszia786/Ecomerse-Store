import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./Todo";
import Cart from "./Shoping/cart";
import Navbar from "./common/navbar";
import AddProduct from "./Shoping/AddProduct";
import Dashboard from "./components/dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Payment from "./pages/payment";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Todo/>}/> */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/shopingcart"
            element={
              <PrivateRoute>  
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-product"
            element={
              <PrivateRoute>
                <AddProduct />
              </PrivateRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <PrivateRoute>  
                <Payment />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
