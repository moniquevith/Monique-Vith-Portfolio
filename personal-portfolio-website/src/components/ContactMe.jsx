import React from "react";

import '../ContactMe.css'

function ContactMe() {
    return (
        <>  
            <div className="contactme-section">
                <div className="header">Contact me!</div>
                <div className="enquiries-section">
                    <div className="online-enquiry-section">
                        <h2 id="online-enq-header">Online Enquiry</h2>
                        <textarea placeholder="Name" type="text" className="input-online-enq"></textarea>
                        <textarea placeholder="Email" type="text" className="input-online-enq"></textarea>
                        <textarea placeholder="Phone Number" type="numbers" className="input-online-enq"></textarea>
                        <textarea placeholder="Message" type="text" className="input-online-enq message-input"></textarea>
                    </div>
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