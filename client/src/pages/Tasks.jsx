import { useEffect, useState } from "react";

import API from "../services/api";

import toast from "react-hot-toast";

function Tasks() {

  const token = localStorage.getItem("token");

  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Todo",
    dueDate: ""
  });

  const fetchTasks = async () => {

    try {

      const res = await API.get("/tasks", {
        headers: {
          authorization: token
        }
      });

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/tasks",
        formData,
        {
          headers: {
            authorization: token
          }
        }
      );

      toast.success("Task Created");

      setFormData({
        title: "",
        description: "",
        priority: "Medium",
        status: "Todo",
        dueDate: ""
      });

      fetchTasks();

    } catch (error) {

      toast.error("Failed");

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        Tasks
      </h1>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg mb-10 space-y-4"
      >

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700"
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700"
        >
          <option>Todo</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700"
        />

        <button
          className="bg-blue-500 px-6 py-3 rounded"
        >
          Create Task
        </button>

      </form>

      {/* Tasks */}

      <div className="grid md:grid-cols-2 gap-6">

        {tasks.map((task) => (

          <div
            key={task._id}
            className="bg-gray-800 p-6 rounded-lg"
          >

            <h2 className="text-2xl font-bold">
              {task.title}
            </h2>

            <p className="text-gray-400 mt-2">
              {task.description}
            </p>

            <div className="flex gap-4 mt-4">

              <span className="bg-blue-500 px-3 py-1 rounded">
                {task.priority}
              </span>

              <span className="bg-green-500 px-3 py-1 rounded">
                {task.status}
              </span>

            </div>

            <p className="mt-4 text-yellow-400">
              Due:
              {" "}
              {new Date(task.dueDate)
                .toLocaleDateString()}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Tasks;