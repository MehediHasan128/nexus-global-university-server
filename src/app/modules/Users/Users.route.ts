import express from 'express';
import { UserController } from './Users.controller';

const router = express.Router();

router.post('/create-student', UserController.createStudent);

export const UserRouter = router;