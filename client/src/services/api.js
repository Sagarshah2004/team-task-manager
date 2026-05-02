import axios from "axios";

const API = axios.create({
  baseURL: "https://team-task-manager-five-weld.vercel.app/"
});

export default API;