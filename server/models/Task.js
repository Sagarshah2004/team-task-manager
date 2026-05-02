const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  },
  status: {
    type: String,
    enum: ["Todo", "In Progress", "Completed"],
    default: "Todo"
  },
  priority: String,
  dueDate: Date
});

module.exports = mongoose.model("Task", taskSchema);