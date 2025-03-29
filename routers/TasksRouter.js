import express from "express";
import { TasksController } from "../controllers/TasksController.js";
const TasksRouter = express.Router();

TasksRouter.get("/", TasksController.getAllTasks)

export {TasksRouter}