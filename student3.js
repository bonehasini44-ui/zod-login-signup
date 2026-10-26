const express = require("express");

const app = express();

const PORT = 3004;

app.use(express.json());

app.post("/students", (req, res) => {
    const student = req.body;

    res.json(student);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});