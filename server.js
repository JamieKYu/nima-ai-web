const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('app')); // Serve static files from the 'app' directory

// Endpoint to handle image aesthetic score request
app.post('/api/dev', (req, res) => {
    const { image_data } = JSON.parse(req.body.body);

    // Here you would typically call your external API to get the aesthetic score
    // For demonstration, we'll return a mock score
    const mockScore = Math.random() * 10; // Replace with actual API call

    res.json({ score: mockScore });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
