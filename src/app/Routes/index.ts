import { Router } from "express";
import { UserRouter } from "../modules/Users/Users.route";
import { AcademicSemesterRouter } from "../modules/AcademicSemester/semester.route";

const router = Router();

const modulesRoutes = [
    {
        path: '/users',
        route: UserRouter
    },
    {
        path: '/academic-semester',
        route: AcademicSemesterRouter
    },
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;