import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }, 
  status: {
    type: Boolean,
    required: true,
    default: false
  },
  due_time: {
    type: Date,
    required: true,
    default: new Date()
  },
  subTask: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubTasks",
  }]
});

const TasksModel = mongoose.model("Tasks", tasksSchema);

export { TasksModel };
