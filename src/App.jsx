import React from "react";
import Navbar from "./components/Navbar";
import { Routes ,Route} from "react-router-dom";
import Home from"./pages/Home";
import Cart from"./pages/Cart";
import { useState } from "react";

const App = () => {
  return (
     <div>
      <div>
      <Navbar/>
      </div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
     </div> 
  )
};

export default App;
