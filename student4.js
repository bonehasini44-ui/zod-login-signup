const express = require("express");

const app = express();

const PORT = 3005;

app.use(express.json());

app.post("/students", (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).send("Name and age are required");
    }

    const student = {
        name: name,
        age: age
    };

    res.json(student);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});