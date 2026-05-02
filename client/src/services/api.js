import axios from "axios";

const API = axios.create({
  baseURL: "team-task-manager-production-8ec1.up.railway.app"
});

export default API;