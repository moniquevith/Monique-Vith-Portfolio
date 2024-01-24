import React from "react";

import { useState } from "react";
import '../PersonalProjects.css';
import { Link } from "react-router-dom";
import WebsiteReport from '../files/PersonalBlogWebsiteSLDCReport.pdf';

function PersonalProjects() {
    const DownloadReport = (url) => {
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', 'Monique Vith Personal Website SLDC Report');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return (
        <>  
            <div className="personal-projects-section">
                <div className="project-image"></div>
                <div className="personal-website-content">
                    <h2 className="personal-website-header">Personal Portfolio Website</h2>
                    <div className="separator"></div>
                    <p className="personal-project-description">The primary aim of my personal portfolio website is to showcase my existing profile and skills as a student in software engineering. It features sections dedicated to my personal projects, an "About Me" segment, and a designated area for inquiries. Future implementations include a personal blog section.</p>
                    <div className="languages-title">Languages: <span className="languages-text">JavaScript, HTML, CSS</span></div>
                    <div className="frameworks-title">Frameworks:  <span className="frameworks-text">ReactJS, Figma, VScode, NodeJS/Express, Nodemailer</span></div>
                    <div className="pp-button-section">
                        <button className="pp-buttons" onClick={() => DownloadReport(WebsiteReport)}>Download Report</button>
                        <Link className="seecode-button" to="https://github.com/moniquevith/Personal-Portfolio-Website">See Code</Link>
                    </div>
                </div>
            </div>
            <div className="personal-projects-section">
                <div className="calculator-image"></div>
                <div className="personal-website-content">
                    <h2 className="personal-website-header">Calculator Application</h2>
                    <p className="personal-project-description">Description of the project here. Description of the project here. Description of the project here. Description of the project here. Description of the project here. Description of the project here. Description of the project here. </p>
                    <div className="languages-title">Languages: <span className="languages-text">JavaScript, HTML/CSS</span></div>
                    <div className="frameworks-title">Frameworks:  <span className="frameworks-text">ReactJS, MaterialUI .</span></div>
                    <div className="pp-button-section">
                        <button className="seecode-button">See Code</button>
                    </div>
                </div>
            </div>
            <div className="personal-projects-section">
                <div className="lol-image"></div>
                <div className="personal-website-content">
                    <h2 className="personal-website-header">Some sort of Game</h2>
                    <p className="personal-project-description">Description of the project here. Description of the project here. Description of the project here. Description of the project here. Description of the project here. Description of the project here. Description of the project here. </p>
                    <div className="languages-title">Languages: <span className="languages-text">JavaScript, HTML/CSS</span></div>
                    <div className="frameworks-title">Frameworks:  <span className="frameworks-text">ReactJS, MaterialUI .</span></div>
                    <div className="pp-button-section">
                        <button className="seecode-button">See Code</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalProjects;