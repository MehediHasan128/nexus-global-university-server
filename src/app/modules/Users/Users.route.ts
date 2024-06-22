import express from 'express';
import { UserController } from './Users.controller';

const router = express.Router();

router.post('/create-student', UserController.createStudent);
router.post('/create-faculty', UserController.createFaculty);

export const UserRouter = router;