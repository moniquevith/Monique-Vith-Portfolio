import React from "react";

import '../App.css'
import { useState } from "react";
import MoniqueVithResume from '../files/MoniqueVithResume.pdf';

function AboutMe() {
    const blue = "#0392F2"
    const grey = "#3E3E42"
    const [programmingButtonColor, setProgrammingButtonColor] = useState(blue)
    const [frameworksButtonColor, setFrameworksButtonColor] = useState(grey)
    const [personalButtonColor, setPersonalButtonColor] = useState(grey)

    const [programming, setProgramming] = useState(true);
    const [frameworks, setFrameworks] = useState(false);
    const [personal, setPersonal] = useState(false);

    const showFrameworks = () => {
        setProgramming(false) 
        setPersonal(false)
        setFrameworks(true)
        setFrameworksButtonColor(blue)
        setPersonalButtonColor(grey)
        setProgrammingButtonColor(grey)
    }

    const showProgramming = () => {
        setProgramming(true)
        setPersonal(false)
        setFrameworks(false)
        setFrameworksButtonColor(grey)
        setPersonalButtonColor(grey)
        setProgrammingButtonColor(blue)
    }
    
    const showPersonal = () => {
        setProgramming(false)
        setFrameworks(false)
        setPersonal(true)
        setFrameworksButtonColor(grey)
        setPersonalButtonColor(blue)
        setProgrammingButtonColor(grey)
    }

    const downloadCV = (url) => {
      const aTag = document.createElement('a');
      aTag.href = url;
      aTag.setAttribute('download', "Monique Vith's Resume");
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    }
 
    return (
        <>
            <div className="about-me-description">
                <div className="about-me-text">
                    <div className="welcome-header">THIS IS A TEST</div>
                    <div className="welcome-header">WELCOME TO MY WORLD</div>
                    <div>
                        <span className="intro-1">Hi, I’m </span>
                        <span className="intro-2">Monique Vith<br/></span>
                        <span className="intro-1">a Software Engineer Student.</span>
                    </div>
                    <p className="intro-3">I’m currently a 4th year student studying a Bachelors of Engineering (Honors) majoring in Software. I am passionate about learning new technologies, creating innovative solutions, and making a positive impact in society!</p>
                    <button className="download-resume" onClick={() => downloadCV(MoniqueVithResume)}>Download Resume</button>
                </div>
                <div>
                    <div className="headshot"></div>
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

                <div className="Robo-flex-box">
                    <div className="Robo-header">
                        <div className="Robo-logo"></div>
                        <div className="Robo-title">Robogals UNSW</div>
                    </div>
                    <div className="Robo-role">Executive Marketing Manager</div>
                    <ul className="Robo-role-descrriptions">
                        <li className="Robo-description">Managed a sub-committee marketing team in creating content to advertise and promote Robogals events and brand in aims to encourage women in STEM fields. </li>
                        <li className="Robo-description">Robogals has over 600+ members in the society </li>
                    </ul>
                </div>
            </div>

            <div className="skills-group-header">
                <div className="separator"></div>
                <div className="skills-header">My Skills</div>
            </div>

            <div className="skills-categories">
                <button className="programming-button" style={{backgroundColor: programmingButtonColor}} onClick={() => showProgramming()}>Programming</button>
                <button className="frameworks-button" style={{backgroundColor: frameworksButtonColor}} onClick={() => showFrameworks()}>Frameworks & Tools</button>
                <button className="personal-skills-button"  style={{backgroundColor: personalButtonColor}} onClick={() => showPersonal()}>Personal Skills</button>
            </div>
            <div className="skills-descriptions">
                {
                    programming && <>
                    <ul className="programming-qualifications">
                        <li className="skills-text python-logo">Python</li>
                        <li className="skills-text js-logo">Javascript</li>
                        <li className="skills-text c-logo">C</li>
                    </ul>
                    <ul className="programming-qualifications">
                        <li className="skills-text sql-logo">SQL/PosgreSQL</li>
                        <li className="skills-text html-logo">HTML</li>
                        <li className="skills-text css-logo">CSS</li>
                    </ul>
                    </>
                }
                {
                    frameworks && <>
                    <ul className="frameworks-qualifications">
                        <li className="skills-text vscode-logo">VScode</li>
                        <li className="skills-text microsoft-logo">Microsoft Suites</li>
                        <li className="skills-text github-logo">Github</li>
                    </ul>
                    <ul className="frameworks-qualifications">
                        <li className="skills-text gitlab-logo">Gitlab</li>
                        <li className="skills-text reactjs-logo">ReactJS</li>
                        <li className="skills-text figma-logo">Figma</li>
                    </ul>
                    <ul className="frameworks-qualifications">
                        <li className="skills-text materialui-logo">MaterialUI</li>
                        <li className="skills-text canva-logo">Canva</li>
                    </ul>
                    </>
                }
                {
                    personal && <>
                    <ul className="personal-qualifications">
                        <li className="personal-skills-text">Analytical & Strategic</li>
                        <li className="personal-skills-text">Problem Solver</li>
                        <li className="personal-skills-text">Organisation</li>
                    </ul>
                    <ul className="programming-qualifications">
                        <li className="personal-skills-text">Communication</li>
                        <li className="personal-skills-text">Leadership</li>
                        <li className="personal-skills-text">Teamwork</li>
                    </ul>
                    <ul className="programming-qualifications">
                        <li className="personal-skills-text">Sales</li>
                        <li className="personal-skills-text">Multitasking</li>
                        <li className="personal-skills-text">Attention to Detail</li>
                    </ul>
                    </>
                }
            </div>
        </>
    )
}

export default AboutMe;