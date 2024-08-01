import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./semester.interface";
import { AcademicSemesterCode, AcademicSemesterName, months } from "./semester.constant";

const academicSemesterSchema = new Schema<TAcademicSemester>({
    semesterName: {
        type: String,
        enum: AcademicSemesterName,
        required: true
    },
    semesterCode: {
        type: String,
        enum: AcademicSemesterCode,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    startMonth: {
        type: String,
        enum: months,
        required: true
    },
    endMonth: {
        type: String,
        enum: months,
        required: true
    },
},{
    timestamps: true
})


export const academicSemester = model<TAcademicSemester>('semester', academicSemesterSchema)