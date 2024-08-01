import { TAcademicSemesterNameCodeMapper } from "./semester.interface";

export type TAcademicSemesterName = 'Spring' | 'Summer' | 'Fall';
export type TAcademicSemesterCode = '01' | '02' | '03';

export type TMonths = | 'January'
| 'February'
| 'March'
| 'April'
| 'May'
| 'June'
| 'July'
| 'August'
| 'September'
| 'October'
| 'November'
| 'December'; 


export const AcademicSemesterName : TAcademicSemesterName[] = ['Spring', 'Summer', 'Fall']
export const AcademicSemesterCode : TAcademicSemesterCode[] = ['01', '02', '03']
export const months: TMonths[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]


export const academicSemesterNameCodeMapper : TAcademicSemesterNameCodeMapper = {
    Spring: '01',
    Summer: '02',
    Fall: '03'
}