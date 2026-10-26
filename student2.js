const express = require("express");

const app = express();

const PORT = 3003;

app.get("/students", (req, res) => {
    const course = req.query.course;

    res.send(`Selected course: ${course}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});