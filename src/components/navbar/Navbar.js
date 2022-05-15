import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaShoppingCart } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    <div className="header">
    <div clasName="logo">
    <img src="./img/logo.png"/>
    </div>
    <div clasName="menu">
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">MENU</a></li>
        <li><a href="#">RESERVATION</a></li>
        <li><a href="#">RECIPE</a></li>
        <li><a href="#">BLOG</a></li>
        <li><a href="#">PAGES</a></li>
        <li><a href="#">CONTACT</a></li>
        <li><FaShoppingCart /></li>
        <div className="nav_btn_background">
        <button className="nav_btn"><span><FaConciergeBell /></span>BOOK YOUR TABLE</button>
        </div>
      </ul>
      
    </div>
    </div>
    </>
  )
};

export default Navbar;
