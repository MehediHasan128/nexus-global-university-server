import express from 'express';
import { AcademicSemesterController } from './semester.controller';
import ValidateRequest from '../../middlwares/validationRequest';
import { AcademicSemesterValidation } from './semester.validation';

const router = express.Router();

router.post('/create-academic-semester', ValidateRequest(AcademicSemesterValidation.createAcademicSemesterValidationSchema), AcademicSemesterController.createAcademicSemester)

export const AcademicSemesterRouter = router;