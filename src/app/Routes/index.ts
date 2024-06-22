import { Router } from "express";
import { UserRouter } from "../modules/Users/Users.route";

const router = Router();

const modulesRoutes = [
    {
        path: '/users',
        route: UserRouter
    }
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;