const express = require("express");

const app = express();

const PORT = 3007;

app.use(express.json());

let students = [
    { id: 1, name: "Hasini", age: 20 },
    { id: 2, name: "Rahul", age: 21 },
    { id: 3, name: "Anu", age: 20 },
    { id: 4, name: "priyanka", age: 21},
];

app.get("/students", (req, res) => {
    res.json(students);
});


app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).send("Student not found");
    }

    res.json(student);
});
app.post("/students", (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).send("Name and age are required");
    }

    const newStudent = {
        id: students.length + 1,
        name: name,
        age: age
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

// PUT student
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).send("Student not found");
    }

    student.name = req.body.name;
    student.age = req.body.age;

    res.json(student);
});
app.patch("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).send("Student not found");
    }

    if (req.body.name) {
        student.name = req.body.name;
    }

    if (req.body.age) {
        student.age = req.body.age;
    }

    res.json(student);
});

app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).send("Student not found");
    }

    const deletedStudent = students.splice(index, 1);

    res.json(deletedStudent[0]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


