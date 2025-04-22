const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');  
const { sendEmail } = require('./emailService');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON bodies

// Handle form submission
app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    console.log(req.body); // Logs the form submission data

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Send the email
    const result = await sendEmail(email, subject, body);

    if (result.success) {
        return res.status(200).json({ success: true, message: `Message sent successfully` });
    } else {
        return res.status(500).json({ success: false, message: result.message });
    }
});

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
    // Serve static files from the React app's build folder
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    // Serve index.html for all non-API requests (enables React routing)
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    });
}

// GET route for testing
app.get('/api/send-email', (req, res) => {
    res.status(200).json({ success: true, message: 'API is working!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
