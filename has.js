const{z} = require("zod")
const SignupSchema=z.object({
    name: z.string().trim()
       .min(2, 'Name must be at least 2 characters'),
    email: z.string().trim().toLowerCase()
        .email('enter a valid email'),
    password: z.string()
    .min(6, 'Password  must be at least 6 characters'),
});

const result = SignupSchema.safeParse(req.body);
const express = require("express");

const app = express();
app.use(express.json());

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      message: "Invalid email"
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters"
    });
  }

  res.status(201).json({
    message: "Registration successful"
  });
});

module.exports = app;