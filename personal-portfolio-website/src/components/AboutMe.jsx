import React from "react";

import '../App.css'

function AboutMe() {
    return (
        <>
            <div className="about-me-description">
                <div className="about-me-text">
                    <div className="welcome-header">WELCOME TO MY WORLD</div>
                    <div>
                        <span className="intro-1">Hi, I’m </span>
                        <span className="intro-2">Monique Vith<br/></span>
                        <span className="intro-1">a Software Engineer Student.</span>
                    </div>
                    <p className="intro-3">I’m currently a 4th year student studying a Bachelors of Engineering (Honors) majoring in Software. I am passionate about learning new technologies, creating innovative solutions, and making a positive impact in society!</p>
                    <button className="download-resume">Download Resume</button>
                </div>
                <div>
                    <img className="headshot"/>
                </div>
            </div>
        </>
    )
}

export default AboutMe;