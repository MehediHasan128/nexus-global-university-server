import { Schema, model } from "mongoose";
import { TGuardian, TLocalGuardian, TStudent, TStudentName } from "./Students.interface";
import { Gender } from "./Students.constant";

const studentNameSchema = new Schema<TStudentName>({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    }
});

const guardianSchema = new Schema<TGuardian>({
    fatherName: {
        type: String,
        required: true
    },
    fatherOccupation: {
        type: String,
        required: true
    },
    fatherConatctNo: {
        type: String,
        required: true
    },

    motherName: {
        type: String,
        required: true
    },
    motherOccupation: {
        type: String,
        required: true
    },
    motherConatctNo: {
        type: String,
        required: true
    }
})

const localGuardianSchema = new Schema<TLocalGuardian>({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
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
        required: true
    },
    gender: {
        type: String,
        enum: Gender,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String,
        required: true
    },
    presentAddress: {
        type: String,
        required: true
    },
    parmanentAddress: {
        type: String,
        required: true
    },
    guardian: {
        type: guardianSchema,
        required: true
    },
    localGuardian: {
        type: localGuardianSchema,
        required: true
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