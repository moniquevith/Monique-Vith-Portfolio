import React from "react";
import './bio.css'
import image from './assets/dragon-fruit-me.jpg'

function Bio() {
    return (
        <div className="bio-wrapper">
            <div className="bio-box">
                <p className="bio-header">ABOUT ME</p>
                <div className="bio-content">
                    <img src={image} alt="dragon-fruit-picking" className="dragon-picking"/>
                    <div>
                        <p className="bio-descript"> Hi! I'm currently in my fourth year of software engineering at University of New South Wales and I'm due to graduate May 2025. Over the course of my degree, I've become more confident working with a variety of tools and technologies. More specifically, I have experience in full-stack development, security, data science and much more. </p>
                        <p className="bio-descript">My technical expertise in software engineering, combined with a solid background in sales and customer service, allows me to offer a unique blend of problem-solving skills, technical proficiency, and effective communication. I'm a strong believer in the power of teamwork and collaboration to achieve shared goals and drive meaningful outcomes. </p>
                        <p className="bio-descript">Outside of my academic and professional pursuits, I stay busy with a variety of hobbies. I enjoy staying active with strength training, and mixed martial arts, listening to podcasts, and exploring new places to eat! I am a huge advocate for health and wellbeing, and always strive to become a better version of myself everyday. I'm very excited to see where my future takes me!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio;