const express = require("express");

const app = express();

const PORT = 3006;

let students = [
    { id: 1, name: "Hasini", age: 20 },
    { id: 2, name: "Rahul", age: 21 },
    { id: 3, name: "Anu", age: 20 },
    { id: 4, name: "Priya", age: 22 },
    { id: 5, name: "Kiran", age: 21 }
];

app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).send("Student not found");
    }

    const deletedStudent = students.splice(index, 1);

    res.json(deletedStudent[0]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});