import React from "react";

import { useState } from "react";
import '../ContactMe.css'

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [msg, setMsg] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        const info = {name, email, phoneNumber, msg}
        console.log(info)
    }

    return (
        <>  
            <div className="contactme-section">
                <div className="header">Contact me!</div>
                <div className="enquiries-section">
                    <form className="online-enquiry-section" name="enquiry-form" onSubmit={submitForm}>
                        <h2 id="online-enq-header">Online Enquiry</h2>
                        <textarea placeholder="Name" type="text" name="name" className="input-online-enq" onChange={(e) => setName(e.target.value)}></textarea>
                        <textarea placeholder="Email" type="text" name="email" className="input-online-enq" onChange={(e) => setEmail(e.target.value)}></textarea>
                        <textarea placeholder="Phone Number" type="numbers" name="phone-number" className="input-online-enq" onChange={(e) => setPhoneNumber(e.target.value)}></textarea>
                        <textarea placeholder="Message" type="text" name="message" className="input-online-enq message-input" onChange={(e) => setMsg(e.target.value)}></textarea>
                        <input type="submit" className="submit-form" value="Submit"></input>
                    </form>
                    <div className="contact-details-section">
                        <h2 id="contact-details-header">Contact Details</h2>
                        <h3 className="contact-info">Email</h3>
                        <p className="contact-info">moniquevith1@gmail.com</p>
                        <h3 className="contact-info">Phone Number</h3>
                        <p className="contact-info">0466 372 776</p>
                        <h3 className="contact-info">Social Media</h3>
                        <a className="contact-info" href="https://www.linkedin.com/in/moniquevith/">https://www.linkedin.com/in/moniquevith/</a>
                        <a className="contact-info" href="https://github.com/moniquevith">https://github.com/moniquevith</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe