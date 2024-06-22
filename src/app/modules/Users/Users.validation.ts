import { z } from "zod";

const userValidationSchema = z.object({
    password: z.string().min(8, {message: 'Pasword must be more then 8 characters'}).max(20, {message: 'Password can not be more then 20 characters'}).optional(),
});

export const UserValidation = {
    userValidationSchema
}