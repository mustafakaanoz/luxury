import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaAngleRight } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_text">
        <h1>Teast your fav dish</h1>
        <h2>from <span>luxury restaurent</span></h2>
      </div>


      <img className="bannerBack" src="img/header_back.jpg.png" />
      <img className="iconFood" src="img/icon_food.png" />
      <h2 className="icon_text">Exlore <br />food Menu</h2>
      <div className="below_banner">
        <div className="below_first">
          <div className="message_icon">
            <FaRegCommentAlt />
          </div>
          <p>READ<br /><span>REVIEWS</span></p>
          <div className="arrow_btn_circle">
            <button className="arrow_btn"><FaAngleRight /> </button>
          </div>
        </div>
        <div className="below_second">
          <div className="message_icon">
            <FaPhoneAlt />
          </div>
          <p>CALL US NOW FOR<br /><span>HOME DELIVERY</span></p>
          <div className="second_phone">
            <p><a href="1-008-005-006">1-008-005-006</a></p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Banner