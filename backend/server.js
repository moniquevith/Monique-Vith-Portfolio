const express = require("express")
const app = express()
const nodemailer = require("nodemailer");

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.post("/send/email", async (req, res) => {
    const {name, email, phoneNumber, msg} = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: "emmitt35@ethereal.email",
            pass: "44vCHxn2hwXfMKpd2n",
        },
    });
    
    const message = {
        from: '"The Express App" <theExpressApp@example.com>', // sender address
        to: "moniquevith1@gmail.com", // list of receivers
        subject: "Hello", // Subject line
        text: "Hello world?", // plain text body
    }

    // send mail with defined transport object
    let info = await transporter.sendMail({ message });
    
    console.log("Message sent: %s", info.messageId);

    res.send("email sent!")
})

app.listen(5000, () => { console.log("server started on port http://localhost:5000") })