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
                    <div className="frameworks-title">Tools & Frameworks:  <span className="frameworks-text">ReactJS, Figma, VScode, NodeJS/Express, Nodemailer</span></div>
                    <div className="pp-button-section">
                        <button className="pp-buttons" onClick={() => DownloadReport(WebsiteReport)}>Download Report</button>
                        <Link className="seecode-button" to="https://github.com/moniquevith/Personal-Portfolio-Website">See Code</Link>
                    </div>
                </div>
            </div>
            <div className="personal-projects-section">
                <div className="tic-tac-toe-image"></div>
                <div className="personal-website-content">
                    <h2 className="personal-website-header">Tic Tac Toe Game</h2>
                    <div className="separator"></div>
                    <p className="personal-project-description">Tic-tac-toe is a game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. </p>
                    <div className="languages-title">Languages: <span className="languages-text">Python</span></div>
                    <div className="frameworks-title">Tools & Frameworks:  <span className="frameworks-text">VScode</span></div>
                    <div className="pp-button-section">
                        <Link className="seecode-button" to="https://github.com/moniquevith/TicTacToe">See Code</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalProjects;