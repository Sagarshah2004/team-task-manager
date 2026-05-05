import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "member"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post("/auth/signup", formData);

      toast.success("Signup Successful");

      navigate("/");

    } catch (error) {

        if (error.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Signup Failed");
        }

      }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg w-96 space-y-4"
      >

        <h1 className="text-3xl text-white font-bold text-center">
          Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 text-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 text-white"
        />

        <select
          name="role"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 text-white"
        >
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded text-white"
        >
          Signup
        </button>

        <p className="text-gray-300 text-center">
          Already have an account?
          <Link to="/" className="text-blue-400 ml-1">
            Login
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Signup;