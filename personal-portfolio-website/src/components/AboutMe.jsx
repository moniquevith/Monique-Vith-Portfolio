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
            <div className="experience-group-header">
                <div className="separator"></div>
                <div className="experience-header">My Experience</div>
            </div>
            <div className="experience-descriptions">
                <div className="FF-flex-box">
                    <div className="FF-header">
                        <div className="FF-logo"></div>
                        <div className="FF-title">Fitness Forum Health Club</div>
                    </div>
                    <div className="FF-role">Sales/Receptionist</div>
                    <ul className="FF-role-descrriptions">
                        <li className="FF-description">Generating new sales opportunities by approaching walk-ins, cold calling, networking and marketing.</li>
                        <li className="FF-description">Preparing regular reports for the sales manager summarising progress against KPIs</li>
                    </ul>
                </div>

                <div className="MEA-flex-box">
                    <div className="MEA-header">
                        <div className="MEA-logo"></div>
                        <div className="MEA-title">Marc Edward Agency</div>
                    </div>
                    <div className="MEA-role">Fragrance Sales Associate</div>
                    <ul className="MEA-role-descrriptions">
                        <li className="MEA-description">Meeting sales targets by actively engaging customers, demonstrating the features of different fragrances, and persuading them to make purchases. This also involves maintaining a focus on key performance indicators (KPIs) and regularly checking progress toward sales goals.</li>
                    </ul>
                </div>

                <div className="MEA-flex-box">
                    <div className="MEA-header">
                        <div className="MEA-logo"></div>
                        <div className="MEA-title">Robogals UNSW</div>
                    </div>
                    <div className="MEA-role">Executive Marketing Manager</div>
                    <ul className="MEA-role-descrriptions">
                        <li className="MEA-description">Managed a sub-committee marketing team in creating content to advertise and promote Robogals events and brand in aims to encourage women in STEM fields. </li>
                        <li className="MEA-description">Robogals has over 600+ members in the society </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AboutMe;