import { TAcademicSemesterCode, TAcademicSemesterName, TMonths } from "./semester.constant";

export type TAcademicSemester = {
    semesterName: TAcademicSemesterName;
    semesterCode: TAcademicSemesterCode;
    year: string;
    startMonth: TMonths;
    endMonth: TMonths;
}

export type TAcademicSemesterNameCodeMapper = {
    [key: string] : string
}