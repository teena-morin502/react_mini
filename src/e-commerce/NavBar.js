import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <header className="header">
      <div className="logo">SHOP NOW</div>
      <nav className="nav-links">
        <span>Home</span>
        <span>Shop All</span>
        <span>Blog</span>
        <span>About Us</span>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search Product..." />
      </div>
    </header>
  );
};
export default NavBar;

