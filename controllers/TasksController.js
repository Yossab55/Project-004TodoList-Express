import { TasksModel } from "../models/TasksModel.js";
import { MongooseWrapper } from "../source/wrapper/MongooseWrapper.js";

async function getAllTasks(request, response) {
  let Tasks = await MongooseWrapper.getMany(TasksModel);
  Tasks.toArray;

  response.send(Tasks);
}

const TasksController = {
  getAllTasks
}

export {TasksController};