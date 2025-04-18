import React from "react";
import './App.css'

import { Routes, Route, Navigate } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Navigation from "./components/nav-buttons/Navigation";
import PersonalProjects from "./components/PersonalProjects";
import ContactMe from "./components/ContactMe";
import Blogs from "./components/Blogs";
import AboutPage from "./components/TitlePage/AboutPage";
import Description from "./components/ShortDescription/description";
import Bio from "./components/LongDescription/Bio";

function PageList() {
    return (
        <>
            <div className="application">
                <Navigation />
                <AboutPage />
                <Description />
                <Bio />
                <br />
                <Routes>
                    
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/Monique-Vith-Portfolio" element={<Navigate to="/" replace />} />
                    <Route path="/personal/projects" element={<PersonalProjects />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/contact/me" element={<ContactMe />} />
                </Routes>
            </div>
        </>
    )
}

export default PageList