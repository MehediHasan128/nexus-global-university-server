import express from 'express';
import { UserController } from './Users.controller';
import ValidateRequest from '../../middlwares/validationRequest';
import { facultyValidation } from '../Faculty/Faculty.validation';

const router = express.Router();

router.post('/create-student', UserController.createStudent);
router.post('/create-faculty', ValidateRequest(facultyValidation.createFacultyValidationSchema), UserController.createFaculty,
);
router.post('/create-admin', UserController.createAdmin);

export const UserRouter = router;