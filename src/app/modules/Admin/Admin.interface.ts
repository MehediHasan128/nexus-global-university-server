import { Types } from "mongoose";
import { TGender } from "../Constant/constant";

export type TAdminName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};


export type TAdmin = {
    id: string;
    user: Types.ObjectId;
    name: TAdminName;
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