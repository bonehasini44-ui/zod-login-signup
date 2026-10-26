const { z } = require("zod");
const SignupSchema = z.object({
    name: z.string().trim()
        .min(2, "Name must be at least 2 characters"),

    email: z.string().trim().toLowerCase()
        .email("Enter a valid email"),

    gender: z.(["male", "female", "other"], {