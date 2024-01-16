import React from "react";

import { Link } from "react-router-dom";

function Navigation() {
    return (
        <>
        <span> <Link to="/">About me</Link></span>
        <span> <Link to="/personal/projects">Personal Projects</Link></span>
        <span> <Link to="/contact/me">Contact me</Link></span>
        </>
    )
}

export default Navigation;