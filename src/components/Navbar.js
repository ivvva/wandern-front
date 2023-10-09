import React from "react";
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="h-screen bg-blue flex justify-center text-center text-white items-center">
      <div className="flex justify-center flex-col items-center mt-24">
        <h className="text-[#fff] font-Magilio text-9xl">Wandern</h>
        <div className="">
        <img className="h-40" src={logo} alt="logo"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
