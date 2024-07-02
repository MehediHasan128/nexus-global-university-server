import { NextFunction, Request, Response } from 'express';
import { UserServices } from './Users.services';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body;
    const result = await UserServices.createStudentIntoDB(password, student);

    res.send({
      success: true,
      statusCode: 200,
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

    res.send({
      success: true,
      statusCode: 200,
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

    res.send({
      success: true,
      statusCode: 200,
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
