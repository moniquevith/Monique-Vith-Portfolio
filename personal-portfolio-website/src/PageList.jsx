import React from "react";
import './App.css'

import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
                <p>hi</p>
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