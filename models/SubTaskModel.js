import mongoose, { mongo } from "mongoose";

const subTasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  due_time: {
    type: Date,
    required: true,
    default: new Date(),
  }
});

const SubTasksModel = mongoose.model("SubTasks", subTasksSchema);

export {
  SubTasksModel
}