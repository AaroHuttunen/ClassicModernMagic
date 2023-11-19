import React, { useState } from "react";
import './Navbar.css';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleNavLinkClick = () => {
        setIsNavExpanded(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-title">Classic Modern</div>
            <button
                className="hamburger"
                onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
                {/* Icon or text to indicate menu expansion */}
                {isNavExpanded ? '✖' : '☰'}
            </button>
            <ul className={`navbar-nav ${isNavExpanded ? "expanded" : ""}`}>
                <li className="nav-item">
                    <a className="nav-link" href="#about" onClick={handleNavLinkClick}>
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#legal-sets" onClick={handleNavLinkClick}>
                        Legal Sets
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#banned-cards" onClick={handleNavLinkClick}>
                        Banned Cards
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#social" onClick={handleNavLinkClick}>
                        Social
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#decks" onClick={handleNavLinkClick}>
                        Decks
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;