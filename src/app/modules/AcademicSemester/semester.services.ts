import { academicSemesterNameCodeMapper } from "./semester.constant";
import { TAcademicSemester } from "./semester.interface";
import { academicSemester } from "./semester.model";

const createAcademicSemesterIntoDB = async(payload: TAcademicSemester) => {

    if(academicSemesterNameCodeMapper[payload.semesterName] !== payload.semesterCode){
        throw new Error('Invalid Semester Code')
    }

    const result = await academicSemester.create(payload);
    return result
};

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB
}