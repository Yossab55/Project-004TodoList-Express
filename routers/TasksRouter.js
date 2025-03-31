import express from "express";
import { TasksController } from "../controllers/TasksController.js";
const TasksRouter = express.Router();

TasksRouter.get("/", TasksController.getAllTasks);

TasksRouter.post("/", TasksController.create);

TasksRouter.delete("/:id", TasksController.getTask, TasksController.remove);
export { TasksRouter };
