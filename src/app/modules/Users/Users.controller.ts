import { NextFunction, Request, Response } from 'express';
import { UserServices } from './Users.services';
import { sendResponce } from '../../../util/sendResponce';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body;
    const result = await UserServices.createStudentIntoDB(password, student);

    sendResponce(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student create successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const createFaculty = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, faculty } = req.body;
    const result = await UserServices.createFacultyIntoDB(password, faculty);

    sendResponce(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Faculty create successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, admin } = req.body;
    const result = await UserServices.createAdminIntoDB(password, admin);

    sendResponce(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Admin create successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createStudent,
  createFaculty,
  createAdmin,
};