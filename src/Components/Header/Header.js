import React from "react";
import logo from "../../Images/Capture.PNG";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/shop"> Course </a>
        <a href="/order"> Order Review </a>
        <a href="/discount"> Discount Coupon </a>
      </nav>
    </div>
  );
};

export default Header;
