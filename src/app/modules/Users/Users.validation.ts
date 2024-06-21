import { z } from "zod";
import { userRole, userStatus } from "./Users.constant";

const userValidationSchema = z.object({
    id: z.string(),
    password: z.string().min(8, {message: 'Pasword must be more then 8 characters'}).max(20, {message: 'Password can not be more then 20 characters'}),
    needsPasswordChange: z.boolean().optional().default(true),
    role: z.enum([...userRole] as [string, ...string[]]),
    status: z.enum([...userStatus] as [string, ...string[]]).default('in-progress'),
    isDeleted: z.boolean().optional().default(true)
});

export const UserValidation = {
    userValidationSchema
}