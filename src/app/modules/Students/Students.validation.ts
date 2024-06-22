import { z } from "zod";
import { Gender } from "../Constant/constant";

const studentNameValidationSchema = z.object({
    firstName: z.string({
        required_error: 'First name is required'
    }),
    middleName: z.string().optional(),
    lastName: z.string({
        required_error: 'Last name is required'
    })
});

const guardianValidationSchema = z.object({
    fatherName: z.string({
        required_error: 'Father name is required'
    }),
    fatherOccupation: z.string({
        required_error: 'Father occupation is required'
    }),
    fatherConatctNo: z.string({
        required_error: 'Conatct number is required'
    }),
    motherName: z.string({
        required_error: 'Mother name is required'
    }),
    motherOccupation: z.string({
        required_error: 'Mother occupation is required'
    }),
    motherConatctNo: z.string({
        required_error: 'Conatct number is required'
    }),
});

const localGuardianValidationSchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    }),
    occupation: z.string({
        required_error: 'Occupation is required'
    }),
    contactNo: z.string({
        required_error: 'Contact number is required'
    }),
});


const createStudentValidationSchema = z.object({
    name: studentNameValidationSchema,
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
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImage: z.string().optional(),
});


export const studentValidation = {
    createStudentValidationSchema
}