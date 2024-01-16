import React from "react";
import './App.css'

import { Routes, Route, Link, useNavigate, Router } from 'react-router-dom';
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
                <hr />
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/personal/projects" element={<PersonalProjects />}/>
                    <Route path="/blogs" element={<Blogs />}/>
                    <Route path="/contact/me" element={<ContactMe />}/>
                </Routes>
            </div>
        </>
    )
}

export default PageList