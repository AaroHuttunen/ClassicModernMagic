import React from "react";
import './Navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
        <div className="nav-title">Classic Modern</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#legal-sets">
              Legal Sets
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#banned-cards">
              Banned Cards
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#social">
              Social
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;