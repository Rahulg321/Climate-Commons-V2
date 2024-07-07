import { z } from "zod";

// Define the schema
export const RegisterFormZodType = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
});

// Define the inferred type
export type RegisterFormSchema = z.infer<typeof RegisterFormZodType>;
