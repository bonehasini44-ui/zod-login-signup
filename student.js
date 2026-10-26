const express = require("express");

const app = express();

const PORT = 3001;

const students = [
    { id: 1, name: "Hasini", age: 20 },
    { id: 2, name: "Rahul", age: 21 },
    { id: 3, name: "Anu", age: 20 },
    { id: 4, name: "Priya", age: 22 },
    { id: 5, name: "Kiran", age: 21 }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});