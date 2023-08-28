//index router to app
import { Router } from "express";

//functions
import { helloWorld } from "../controllers/index.controller.server.js";

//router delegates app
const router = Router();

// add middleware to connect application, paths.
router.use('/',helloWorld);
router.use('/hello',helloWorld);

export default router;