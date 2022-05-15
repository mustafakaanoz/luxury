import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaShoppingCart } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <>
      <nav className="nav">
        <div clasName="logo">
          <img src="./img/logo.png" />
        </div>
        <a onClick={toggleNav} href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        {(toggleMenu || screenWidth > 500) && (
          <div id="menu-list" clasName="menu-item">
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
        )}

      </nav>
    </>
  )
};

export default Navbar;
