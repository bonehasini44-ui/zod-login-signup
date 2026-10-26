const express = require("express");
const { z } = require("zod");

const app = express();

app.use(express.json());

// ==================== SIGNUP SCHEMA ====================

const SignupSchema = z.object({
    name: z.string()
        .trim()
        .min(2, "Name must be at least 2 characters"),

    email: z.string()
        .trim()
        .toLowerCase()
        .email("Enter a valid email"),

    password: z.string()
        .min(6, "Password must be at least 6 characters"),
});

// ==================== LOGIN SCHEMA ====================

const LoginSchema = z.object({
    email: z.string()
        .trim()
        .toLowerCase()
        .email("Enter a valid email"),

    password: z.string()
        .min(6, "Password must be at least 6 characters"),
});

// ==================== SIGNUP ROUTE ====================

app.post("/signup", (req, res) => {

    const result = SignupSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            success: false,
            errors: result.error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            })),
        });
    }

    const { name, email, password } = result.data;

    // TODO:
    // 1. Check whether the email already exists.
    // 2. Hash the password.
    // 3. Save the user in your database.

    return res.status(201).json({
        success: true,
        message: "Signup validation successful",
        user: {
            name,
            email,
        },
    });
});

// ==================== LOGIN ROUTE ====================

app.post("/login", (req, res) => {

    const result = LoginSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            success: false,
            errors: result.error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            })),
        });
    }

    const { email, password } = result.data;

    return res.status(200).json({
        success: true,
        message: "Login validation successful",
        email,
    });
});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
