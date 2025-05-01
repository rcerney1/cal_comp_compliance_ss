const nodemailer = require('nodemailer');
require('dotenv').config();



// Create a transporter for nodemailer (configure your email service here)
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS,   
    },
});

// Create a function to send an email
const sendEmail = async (fromEmail, subject, text) => {
    
    
    


    const mailOptions = {
        from: fromEmail, 
        to: process.env.EMAIL_USER, 
        subject, 
        text, 
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
