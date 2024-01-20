import React from "react";

import '../PersonalProjects.css'

function PersonalProjects() {
    return (
        <>
            <div className="personal-projects-section">
                <div className="project-image">image here</div>
                <div className="personal-website-content">
                    <h2 className="personal-website-header">Personal Portfolio Website</h2>
                    <p className="personal-project-description">Description of the project here. Description of the project here. Description of the project here. Description of the project here. Description of the project here. Description of the project here. Description of the project here. </p>
                    <div className="languages-title">Languages: <span className="languages-text">JavaScript, HTML/CSS</span></div>
                    <div className="languages-title">Frameworks:  <span className="languages-text">ReactJS, MaterialUI .</span></div>
                    <button className="pp-buttons">Download Report</button>
                    <button>See Code</button>
                </div>
            </div>
        </>
    )
}

export default PersonalProjects;