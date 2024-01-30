const dotenv = require('dotenv');
dotenv.config();

const smtpCredentials = JSON.parse(process.env.smtpConfig);

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors"); // Import cors package


const app = express();

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

app.post("/send/email", async (req, res) => {
    const {name, email, phoneNumber, msg} = req.body;
    const html = `
        <p> enquiry from ${name} </p>
        <p> given email: ${email} </p>
        <p> given phone number: ${phoneNumber} </p>
        <p> ${name} says: </p>
        <p> ${msg} </p>
    `;

    const transporter = nodemailer.createTransport(smtpCredentials);

    const info = await transporter.sendMail({
        from: {
            name: name,
            address: "moniquevith1@gmail.com",
        },
        to: 'moniquevith1@gmail.com',
        subject: 'New Enquiry',
        html: html,
    })

    console.log("message sent!")
});

app.listen(5000, () => {
    console.log("server started on port http://localhost:5000");
});
