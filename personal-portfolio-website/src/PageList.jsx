import React from "react";

import { Routes, Route, Link, useNavigate, Router } from 'react-router-dom';
import AboutMe from "./components/AboutMe";
import Navigation from "./components/Navigation";
import PersonalProjects from "./components/PersonalProjects";
import ContactMe from "./components/ContactMe";

function PageList() {
    return (
        <>
            <Navigation />
            <hr />
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/personal/projects" element={<PersonalProjects />}/>
                <Route path="/contact/me" element={<ContactMe />}/>
            </Routes>

            <hr />
            Footer
        </>
    )
}

export default PageList