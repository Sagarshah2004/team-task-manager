import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
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

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      toast.error("Login Failed");
      console.log(error);

    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg w-96 space-y-4"
      >

        <h1 className="text-3xl text-white font-bold text-center">
          Login
        </h1>

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

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded text-white"
        >
          Login
        </button>

        <p className="text-gray-300 text-center">
          Don't have an account?
          <Link to="/signup" className="text-blue-400 ml-1">
            Signup
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Login;