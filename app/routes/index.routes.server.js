//index router to app
import { Router } from "express";

//functions
import { displayAbout, displayContacts, displayHome, displayProjects, displayServices } from "../controllers/index.controller.server.js";

//router delegates app
const router = Router();

// add middleware to connect application, paths.
router.get('/',displayHome);
router.get('/home',displayHome);
router.get('/about', displayAbout);
router.get('/contact', displayContacts);
router.get('/projects', displayProjects);
router.get('/services', displayServices);

export default router;