import React from "react";
import PortfolioLogo from './logo.jsx'
import AboutMee from "./aboutMe.jsx";
import Projects from "./projects.jsx";
import ContactMee from "./contactMe.jsx";

function Navigation() {
    return (
        <div className="nav-bar">
            <PortfolioLogo />
            <div className="nav-buttons">
                <AboutMee />
                <Projects />
                <ContactMee />
            </div>
        </div>
    )
}

export default Navigation;