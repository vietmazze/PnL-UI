import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <i class="fas fa-dragon fa-lg"></i>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/pnl" className="nav-links" onClick={closeMobileMenu}>
            PnL
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/journal" className="nav-links" onClick={closeMobileMenu}>
            Journal
          </Link>
        </li>
        <li>
          <Link
            to="/sign-up"
            className="nav-links-mobile"
            onClick={closeMobileMenu}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
