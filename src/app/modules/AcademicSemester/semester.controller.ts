import httpStatus from "http-status";
import { catchAsync } from "../../../util/catchAsync";
import { sendResponce } from "../../../util/sendResponce";
import { AcademicSemesterServices } from "./semester.services";

const createAcademicSemester = catchAsync(async(req, res) => {
    const semesterData = req.body;
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(semesterData)

    sendResponce(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Academic Semester is created successfully',
        data: result
    })
});


export const AcademicSemesterController = {
    createAcademicSemester
}