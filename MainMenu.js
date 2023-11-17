import React from "react";
import Navbar from "./components/navigation/Navbar.js";
import BannerImage from "./components/pictures/BannerImage";
import About from './components/info/About.js';
import LegalSets from './components/lists/LegalSets.js';
import BannedCards from './components/lists/BannedCards.js';
import Social from "./components/info/Social.js";
import Footer from "./components/info/Footer.js";
import "./MainMenu.css";

function MainMenu() {
    return (
        <div className="App" id="top">
            <header className="App-header">
                <nav>
                    <Navbar/>
                </nav>
            </header>
            <main>
                <BannerImage/>
                <About/>
                <LegalSets/>
                <BannedCards/>
                <Social/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default MainMenu;