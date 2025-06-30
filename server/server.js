const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const compression = require('compression'); // ✅ ADD THIS
const { sendEmail } = require('./emailService');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

// ✅ ENABLE GZIP COMPRESSION
app.use(compression()); // ✅ ADD THIS LINE before other middleware

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Handle form submission
app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body);

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const result = await sendEmail(email, subject, body);

    if (result.success) {
        return res.status(200).json({ success: true, message: `Message sent successfully` });
    } else {
        return res.status(500).json({ success: false, message: result.message });
    }
});

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client', 'dist')));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
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
