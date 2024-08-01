import express from 'express';
import { AcademicSemesterController } from './semester.controller';

const router = express.Router();

router.post('/', AcademicSemesterController.createAcademicSemester)

export const AcademicSemesterRouter = router;