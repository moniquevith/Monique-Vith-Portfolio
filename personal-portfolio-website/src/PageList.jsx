import React from "react";
import './App.css'

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Navigation from "./components/Navigation";
import PersonalProjects from "./components/PersonalProjects";
import ContactMe from "./components/ContactMe";
import Blogs from "./components/Blogs";

function PageList() {
    return (
        <>
            <div className="application">
                <Navigation />
                <br />
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/Monique-Vith-Portfolio" element={<AboutMe />} />
                    <Route path="/personal/projects" element={<PersonalProjects />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/contact/me" element={<ContactMe />} />
                </Routes>
            </div>
        </>
    )
}

export default PageList