import { Router } from "express";

const router = Router();

const modulesRoutes = [
    {
        path: '/',
        route: Router
    }
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;