import { TasksModel } from "../models/TasksModel.js";
import { StatusCode } from "../source/support/StatusCode.js";
import { SubTaskController } from "./SubTasksController.js";
import { addDays } from "../source/support/helpers.js";
async function getAllTasks(request, response) {
  try {
    const Tasks = await TasksModel.find().populate("subTasks")

    response.status(StatusCode.GOOD_REQUEST).send(Tasks);
  } catch (error) {
    response
      .status(StatusCode.SERVER_ERROR)
      .json({ message: "server error with database" });
  }
}
function getTaskById(request, response) {
  response.status(StatusCode.GOOD_REQUEST).json(response.task);
}
async function create(request, response) {
  const subTasks = request.body.subTasks;
  let ids = [];
  if (subTasks && subTasks.length > 0) {
    for (const subTask of subTasks) {
      console.log(subTask)
      ids.push(await SubTaskController.create(subTask));
    }
  }
  console.log(ids)
  let date = new Date();
  const DataToInsert = {
    title: request.body.title,
    description: request.body.description,
    status: false,
    due_time: addDays(date, 1),
    subTasks: ids,
  };
  try {
    const task = new TasksModel(DataToInsert);
    await task.save();
    response
      .status(StatusCode.CREATED_SUCCESS)
      .json({ message: "created A new Task" });
  } catch (error) {
    response
      .status(StatusCode.BAD_REQUEST)
      .json({ message: "insert correct data please" });
  }
}
async function getTask(request, response, next) {
  const id = request.params.id;
  let task;
  try {
    task = await TasksModel.findById(id);
    if (task == null) {
      response
        .status(StatusCode.BAD_REQUEST)
        .json({ message: "search for valid id" });
    }
  } catch (error) {
    response
      .status(StatusCode.SERVER_ERROR)
      .json({ message: "something wrong with the server" });
  }
  response.task = task;
  next();
}
const TasksController = {
  getAllTasks,
  getTaskById,
  getTask,
  create
};

export { TasksController };
