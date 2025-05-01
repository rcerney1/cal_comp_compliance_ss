const nodemailer = require('nodemailer');
require('dotenv').config();



// Create a transporter for nodemailer (configure your email service here)
const transporter = nodemailer.createTransport({
    host: 'smtp.porkbun.com',
    port: 587,
    secure: false, // false for STARTTLS
    auth: {
        user: process.env.EMAIL_USER, // mike@californiacompliancesecurity.com
        pass: process.env.EMAIL_PASS, // Your email password
    },
    tls: {
        ciphers: 'SSLv3',
    },
});

// Create a function to send an email
const sendEmail = async (fromEmail, subject, text) => {
    
    
    const mailOptions = {
        from: process.env.EMAIL_USER,        // always your verified domain email
        to: process.env.EMAIL_USER,          // or wherever you want to receive it
        subject,                             // subject from the form
        text,                                // the message content
        replyTo: fromEmail,                  // ← allows you to click "Reply" and it goes to the user's address
    };
    

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: error.message };
    }
};

module.exports = { sendEmail };
