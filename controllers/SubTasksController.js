import mongoose from "mongoose";
import { SubTasksModel } from "../models/SubTaskModel.js";
import { StatusCode } from "../source/support/StatusCode.js";
import { addDays } from "../source/support/helpers.js";
// async function create(request, response) {
//   const data = new SubTasksModel(request.body);
//   try {
//     await data.save();
//     // response.status(StatusCode.GOOD_REQUEST).json({subTaskId: data._id});
//     return data_id;
//   } catch (error) {
//     // response
//     //   .status(StatusCode.BAD_REQUEST)
//     //   .json({ message: "insert correct data please" });
//     console.log(`there is error with data ${error}`);
//   }
// }
async function create(subTask) {
  let date = new Date();
  const data = {
    title: subTask.title,
    description: subTask.description,
    status: false,
    due_time: addDays(date, 1),
  };
  try {
    const subTask = new SubTasksModel(data);
    
    await subTask.save();
    // response.status(StatusCode.GOOD_REQUEST).json({subTaskId: data._id});
    return subTask._id;
  } catch (error) {
    // response
    //   .status(StatusCode.BAD_REQUEST)
    //   .json({ message: "insert correct data please" });
    console.log(`there is error with data ${error}`);
  }
}
async function remove(id) {
  try {
    const result = await SubTasksModel.deleteOne(id)
    return result;
  } catch (error) {
    console.log(`bad request error with id: ${error}`);
  }
}

const SubTaskController = {
  create,
  remove
};
export { SubTaskController };
