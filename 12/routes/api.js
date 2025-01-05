import express, { Router } from 'express';
const router = express.Router();
import * as taskController from "../app/controllers/taskController.js";
import authMiddleware from '../app/middlewares/authMiddleware.js';


//url params niye kivabe kaj korte hoi:
router.post("/demo1/:name/:age",taskController.demo1);

//query string niye kivabe kaj korte hoi:
router.post("/demo2",taskController.demo2);

// request er json body niye kivabe kaj korte hoi:
router.post("/demo3",taskController.demo3);

//request er form data niye kivabe kaj korte hoi:
router.post("/demo4",taskController.demo4);

//request er header property niye kivabe kaj korte hoi:
router.post("/demo5",taskController.demo5);

//How to works with middleware
router.post("/demo6",authMiddleware,taskController.demo6);

export default router;
