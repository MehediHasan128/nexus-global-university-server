import { Schema, model } from "mongoose";
import { TFaculty, TFacultyName } from "./Faculty.interface";
import { Gender } from "../Constant/constant";

const facultyNameSchema = new Schema<TFacultyName>({
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


const createFacultySchema = new Schema<TFaculty>({
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
        type: facultyNameSchema,
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
    profileImage: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});


export const Faculty = model<TFaculty>('Faculties', createFacultySchema);