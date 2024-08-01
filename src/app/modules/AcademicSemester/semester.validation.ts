import { z } from "zod";
import { AcademicSemesterCode, AcademicSemesterName, months } from "./semester.constant";

const createAcademicSemesterValidationSchema = z.object({
    body: z.object({
        semesterName: z.enum([...AcademicSemesterName] as [string, ...string[]]),
        semesterCode: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
        year: z.string(),
        startMonth: z.enum([...months] as [string, ...string[]]),
        endMonth: z.enum([...months] as [string, ...string[]])
    })
});


const updateAcademicSemesterValidationSchema = z.object({
    body: z.object({
        semesterName: z.enum([...AcademicSemesterName] as [string, ...string[]]).optional(),
        semesterCode: z.enum([...AcademicSemesterCode] as [string, ...string[]]).optional(),
        year: z.string().optional(),
        startMonth: z.enum([...months] as [string, ...string[]]).optional(),
        endMonth: z.enum([...months] as [string, ...string[]]).optional()
    })
});



export const AcademicSemesterValidation = {
    createAcademicSemesterValidationSchema,
    updateAcademicSemesterValidationSchema
}