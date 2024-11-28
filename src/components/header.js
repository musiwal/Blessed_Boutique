import { Link } from "gatsby";
import React from "react";
import "./index.module.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Blessed_Boutique</h1>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
