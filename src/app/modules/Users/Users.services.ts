import config from '../../config';
import { TFaculty } from '../Faculty/Faculty.interface';
import { Faculty } from '../Faculty/Faculty.model';
import { TStudent } from '../Students/Students.interface';
import { Students } from '../Students/Students.model';
import { TUser } from './Users.interface';
import { Users } from './Users.model';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  // Set password
  userData.password = password || (config.default_pass as string);

  // Set user ID
  userData.id = '2024010001';

  // set stuent role
  userData.role = 'student';

  // create user into DB
  const newUser = await Users.create(userData);

  // Set student id or user referance
  payload.id = newUser.id;
  payload.user = newUser._id;

  // create student into DB
  const newStudent = await Students.create(payload);

  return newStudent;
};

const createFacultyIntoDB = async (password: string, payload: TFaculty) => {
  const userData: Partial<TUser> = {};

  // set password
  userData.password = password || (config.default_pass as string);

  // Set faculty Id
  userData.id = 'F-0001';

  // Set user role
  userData.role = 'faculty';

  // Create user into DB
  const newUser = await Users.create(userData);

  // Set faculty id or user referance
  payload.id = newUser.id;
  payload.user = newUser._id;

  // Create faculty into DB
  const newFaculty = await Faculty.create(payload);

  return newFaculty;
};

export const UserServices = {
  createStudentIntoDB,
  createFacultyIntoDB,
};