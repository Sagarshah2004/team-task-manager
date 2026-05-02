import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import API from "../services/api";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const token = localStorage.getItem("token");

  const [tasks, setTasks] = useState([]);

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

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/");
  };

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  );

  const pendingTasks = tasks.filter(
    (task) => task.status !== "Completed"
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">

      {/* Sidebar */}

      <div className="w-64 bg-gray-800 p-5">

        <h1 className="text-3xl font-bold mb-10">
          Task Manager
        </h1>

        <div className="space-y-5">

          <Link
            to="/dashboard"
            className="block hover:text-blue-400"
          >
            Dashboard
          </Link>

          <Link
            to="/projects"
            className="block hover:text-blue-400"
          >
            Projects
          </Link>

          <Link
            to="/tasks"
            className="block hover:text-blue-400"
          >
            Tasks
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded mt-10"
          >
            Logout
          </button>

        </div>
      </div>

      {/* Main */}

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold">
          Welcome, {user?.name}
        </h1>

        <p className="text-gray-400 mt-2">
          Role: {user?.role}
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-gray-800 p-6 rounded-lg">

            <h2 className="text-2xl">
              Total Tasks
            </h2>

            <p className="text-5xl text-blue-400 mt-4">
              {tasks.length}
            </p>

          </div>

          <div className="bg-gray-800 p-6 rounded-lg">

            <h2 className="text-2xl">
              Completed
            </h2>

            <p className="text-5xl text-green-400 mt-4">
              {completedTasks.length}
            </p>

          </div>

          <div className="bg-gray-800 p-6 rounded-lg">

            <h2 className="text-2xl">
              Pending
            </h2>

            <p className="text-5xl text-yellow-400 mt-4">
              {pendingTasks.length}
            </p>

          </div>

        </div>

        {/* Recent Tasks */}

        <div className="bg-gray-800 p-6 rounded-lg mt-10">

          <h2 className="text-3xl font-bold mb-6">
            Recent Tasks
          </h2>

          <div className="space-y-4">

            {tasks.slice(0, 5).map((task) => (

              <div
                key={task._id}
                className="bg-gray-700 p-4 rounded"
              >

                <div className="flex justify-between">

                  <h3 className="font-bold">
                    {task.title}
                  </h3>

                  <span className="text-blue-400">
                    {task.status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;