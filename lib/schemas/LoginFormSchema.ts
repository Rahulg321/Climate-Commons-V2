import { z } from "zod";

// Define the schema
export const loginFormZodType = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(50),
});

// Define the inferred type
export type LoginFormSchema = z.infer<typeof loginFormZodType>;
