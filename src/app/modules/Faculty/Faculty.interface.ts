import { Types } from "mongoose";
import { TGender } from "../Constant/constant";

export type TFacultyName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};


export type TFaculty = {
    id: string;
    user: Types.ObjectId;
    name: TFacultyName;
    gender: TGender;
    dateOfBirth: Date;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    parmanentAddress: string;
    profileImage?: string;
    isDeleted: boolean;
}