// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a port to run the server
const PORT = 3000;

// Set up a simple route to return "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
