const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('public'));

// THIS IS THE FIX: The very first route MUST be your password page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'password.html'));
});

// Your teammate's page is moved to its own home
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 