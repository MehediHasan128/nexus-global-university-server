import { Types } from "mongoose";
import { TGender } from "../Constant/constant";

export type TStudentName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherConatctNo: string;

    motherName: string;
    motherOccupation: string;
    motherConatctNo: string;
};

export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
}


export type TStudent = {
    id: string;
    user: Types.ObjectId;
    name: TStudentName;
    gender: TGender;
    dateOfBirth: Date;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    parmanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImage?: string;
    isDeleted: boolean;
}