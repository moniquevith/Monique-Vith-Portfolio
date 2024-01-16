import React from "react";
import '../App.css';

import { Link } from "react-router-dom";

function Navigation() {
    return (
        <>
        <div className="nav-bar">
            <div>
                <span className="m-logo">M</span>
                <span className="v-logo">vith</span>
            </div>
            <div className="sections">
                <span> <Link to="/" className="section-buttons">About me</Link></span>
                <span> <Link to="/personal/projects" className="section-buttons">Personal Projects</Link></span>
                <span> <Link to="/blogs" className="section-buttons">Blogs</Link></span>
                <span> <Link to="/contact/me" className="section-buttons blue">Contact me</Link></span>
            </div>
        </div>
        </>
    )
}

export default Navigation;