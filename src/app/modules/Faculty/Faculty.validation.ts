import { z } from "zod";
import { Gender } from "../Constant/constant";

const facultyNameValidationSchema = z.object({
    firstName: z.string({
        required_error: 'First name is required'
    }),
    middleName: z.string().optional(),
    lastName: z.string({
        required_error: 'Last name is required'
    })
});

const createFacultyValidationSchema = z.object({
    name: facultyNameValidationSchema,
    gender: z.enum([...Gender] as [string, ...string[]]),
    dateOfBirth: z.date({
         required_error: 'Date of birth is required'
    }),
    email: z.string({
         required_error: 'Email is required'
    }).email({ message: "Invalid email address" }),
    contactNo: z.string({
        required_error: 'Contact number is required'
    }),
    emergencyContactNo: z.string({
        required_error: 'Emergency contact number is required'
    }),
    presentAddress: z.string({
         required_error: 'Present address is required'
    }),
    parmanentAddress: z.string({
         required_error: 'Parmanent address is required'
    }),
    profileImage: z.string().optional(),
});


export const studentValidation = {
    createFacultyValidationSchema
}