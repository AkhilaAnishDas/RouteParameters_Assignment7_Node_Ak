const express = require('express');

const app = express();

app.get('/search', (req, res) => {
    const name = req.query.name;
    const course = req.query.course;

    if (!name && !course) {
        return res.send('No search data provided.');
    }

    res.send(`
        Name: ${name}
        Course: ${course}
    `);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});