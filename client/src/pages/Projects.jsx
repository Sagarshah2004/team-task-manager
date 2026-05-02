import { useEffect, useState } from "react";

import API from "../services/api";

import toast from "react-hot-toast";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  const token = localStorage.getItem("token");

  const fetchProjects = async () => {

    try {

      const res = await API.get("/projects", {
        headers: {
          authorization: token
        }
      });

      setProjects(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    fetchProjects();
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
        "/projects",
        formData,
        {
          headers: {
            authorization: token
          }
        }
      );

      toast.success("Project Created");

      setFormData({
        title: "",
        description: "",
        deadline: ""
      });

      fetchProjects();

    } catch (error) {

      toast.error("Failed");

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        Projects
      </h1>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg mb-10 space-y-4"
      >

        <input
          type="text"
          name="title"
          placeholder="Project Title"
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

        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700"
        />

        <button
          className="bg-blue-500 px-6 py-3 rounded"
        >
          Create Project
        </button>

      </form>

      {/* Projects List */}

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project) => (

          <div
            key={project._id}
            className="bg-gray-800 p-6 rounded-lg"
          >

            <h2 className="text-2xl font-bold">
              {project.title}
            </h2>

            <p className="text-gray-400 mt-2">
              {project.description}
            </p>

           <p className="mt-4 text-blue-400">
                Deadline:
                {" "}
                {project.deadline
                    ? new Date(project.deadline)
                        .toLocaleDateString()
                    : "No Deadline"}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Projects;