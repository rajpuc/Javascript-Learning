import express from 'express';
import * as taskController from '../controllers/taskController.js'; // taskController.js file tekhe sob function k import kore niye ashe taskController object er moddhe rakhbe. And amra dot diye sob function k access korte parbo.
const router = express.Router();

router.post("/createTask",taskController.createTask);

router.get("/readTask", taskController.readTask);

router.put("/updateTask", taskController.updateTask);

router.delete("/deleteTask",taskController.deleteTask);

export default router;