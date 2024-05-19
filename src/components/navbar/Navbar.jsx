import Image from "next/image";
import React from "react";
import { IoIosMenu } from "react-icons/io";
import nav from "@/assets/nav.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <IoIosMenu className="menu" />
        <Image src={nav} alt="avatar" />
      </div>
      <div className="nav">
        <h1>Overview</h1>
        <div className="btn">
          <button className="btn1">...</button>
          <button className="btn2">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
