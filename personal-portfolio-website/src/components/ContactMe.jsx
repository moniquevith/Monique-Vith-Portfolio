import React from "react";

import { useState } from "react";
import '../ContactMe.css'

function ContactMe() {
    const checkValidPhoneNumber = (number) => {
        return number.match('^[0-9]{10}$');
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [msg, setMsg] = useState('')

    const submitForm = async () => {
        if (checkValidPhoneNumber(phoneNumber) && name !== '' && email !== '' && phoneNumber !== '' && msg !== '') {
            try {
                const response = await fetch('http://localhost:5000/send/email', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        phoneNumber: phoneNumber,
                        msg: msg
                    }),
                    headers: {
                        'Content-type': 'application/json',
                    }
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    console.log("Email sent!");
                } else {
                    alert(data);
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert(error);
            }
        } else {
            alert("invalid inputs")
        }
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
                        <h3 className="contact-info sub-title">Email</h3>
                        <p className="contact-info">moniquevith1@gmail.com</p>
                        <h3 className="contact-info sub-title">Phone Number</h3>
                        <p className="contact-info">0466 372 776</p>
                        <h3 className="contact-info sub-title">Social Media</h3>
                        <a className="contact-info contact-links" href="https://www.linkedin.com/in/moniquevith/">https://www.linkedin.com/in/moniquevith/</a>
                        <a className="contact-info contact-links" href="https://github.com/moniquevith">https://github.com/moniquevith</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe