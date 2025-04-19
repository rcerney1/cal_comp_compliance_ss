const nodemailer = require('nodemailer');

// Create a transporter for nodemailer (configure your email service here)
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'ccsstestemail@gmail.com',  
        pass: 'jpat kjri icml nauo',   
    },
});

// Create a function to send an email
const sendEmail = async (fromEmail, subject, text) => {
    console.log("from:", fromEmail);

    const mailOptions = {
        from: fromEmail, 
        to: 'ccsstestemail@gmail.com', 
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
