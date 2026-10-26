
const { z } = require("zod");
const SignupSchema = z.object({
    name: z.string().trim()
        .min(2, "Name must be at least 2 characters"),

    email: z.string().trim().toLowerCase()
        .email("Enter a valid email"),

    gender: z.enum(["male", "female", "other"], {
        message: "Please select a valid gender",
    }),

    password: z.string()
        .min(6, "Password must be at least 6 characters"),
});
const LoginSchema = z.object({
    email: z.string().trim().toLowerCase()
        .email("Enter a valid email"),

    password: z.string()
        .min(6, "Password must be at least 6 characters"),
});
const signupResult = SignupSchema.safeParse(req.body);

if (!signupResult.success) {
    console.log(signupResult.error.issues);
} else {
    console.log(signupResult.data);
}
const loginResult = LoginSchema.safeParse(req.body);

if (!loginResult.success) {
    console.log(loginResult.error.issues);
} else {
    console.log(loginResult.data);
}