import express from "express";
import { TasksController } from "../controllers/TasksController.js";
const TasksRouter = express.Router();

TasksRouter.get("/", TasksController.getAllTasks);

TasksRouter.get("/:id", TasksController.getTask, TasksController.getTaskById);

TasksRouter.post("/", TasksController.create);

TasksRouter.patch("/:id", TasksController.getTask, TasksController.update);

TasksRouter.delete("/:id", TasksController.getTask, TasksController.remove);
export { TasksRouter };
