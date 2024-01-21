import React from "react";

import '../PersonalProjects.css'

function PersonalProjects() {
    return (
        <>
            <div className="personal-projects-section">
                <div className="project-image"></div>
                <div className="personal-website-content">
                    <h2 className="personal-website-header">Personal Portfolio Website</h2>
                    <p className="personal-project-description">Description of the project here. Description of the project here. Description of the project here. Description of the project here. Description of the project here. Description of the project here. Description of the project here. </p>
                    <div className="languages-title">Languages: <span className="languages-text">JavaScript, HTML/CSS</span></div>
                    <div className="frameworks-title">Frameworks:  <span className="frameworks-text">ReactJS, MaterialUI .</span></div>
                    <div className="pp-button-section">
                        <button className="pp-buttons">Download Report</button>
                        <button className="seecode-button">See Code</button>
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