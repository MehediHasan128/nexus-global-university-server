import express from 'express';
import { UserController } from './Users.controller';

const router = express.Router();

router.post('/create-student', UserController.createStudent);
router.post('/create-faculty', UserController.createFaculty);
router.post('/create-admin', UserController.createAdmin);

export const UserRouter = router;