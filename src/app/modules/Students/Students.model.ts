import { Schema, model } from "mongoose";
import { TGuardian, TLocalGuardian, TStudent, TStudentName } from "./Students.interface";
import { Gender } from "./Students.constant";

const studentNameSchema = new Schema<TStudentName>({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    }
});

const guardianSchema = new Schema<TGuardian>({
    fatherName: {
        type: String,
        required: [true, 'Father name is required']
    },
    fatherOccupation: {
        type: String,
        required: [true, 'Father occupation is required']
    },
    fatherConatctNo: {
        type: String,
        required: [true, 'Conatct number is required']
    },

    motherName: {
        type: String,
        required: [true, 'Mother name is required']
    },
    motherOccupation: {
        type: String,
        required: [true, 'Mother occupation is required']
    },
    motherConatctNo: {
        type: String,
        required: [true, 'Conatct number is required']
    }
})

const localGuardianSchema = new Schema<TLocalGuardian>({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    occupation: {
        type: String,
        required: [true, 'Occupation is required']
    },
    contactNo: {
        type: String,
        required: [true, 'Contact number is required']
    }
});


const createStudentSchema = new Schema<TStudent>({
    id: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: studentNameSchema,
        required: [true, 'Name field is required']
    },
    gender: {
        type: String,
        enum: Gender,
        required: [true, 'Gender is required']
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Date of birth is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    contactNo: {
        type: String,
        required: [true, 'Contact number is required']
    },
    emergencyContactNo: {
        type: String,
        required: [true, 'Emergency contact number is required']
    },
    presentAddress: {
        type: String,
        required: [true, 'Present address is required']
    },
    parmanentAddress: {
        type: String,
        required: [true, 'Parmanent address is required']
    },
    guardian: {
        type: guardianSchema,
        required: [true, 'Guardian field is required']
    },
    localGuardian: {
        type: localGuardianSchema,
        required: [true, 'Local guardian field is required']
    },
    profileImage: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})


export const Students = model<TStudent>('Students', createStudentSchema)