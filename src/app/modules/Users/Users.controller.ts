import { UserServices } from './Users.services';
import { sendResponce } from '../../../util/sendResponce';
import httpStatus from 'http-status';
import { catchAsync } from '../../../util/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student } = req.body;
  const result = await UserServices.createStudentIntoDB(password, student);

  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student create successfully',
    data: result,
  });
});

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty } = req.body;
  const result = await UserServices.createFacultyIntoDB(password, faculty);

  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Faculty create successfully',
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin } = req.body;
  const result = await UserServices.createAdminIntoDB(password, admin);

  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Admin create successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
  createFaculty,
  createAdmin,
};