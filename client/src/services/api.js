import axios from "axios";

const API = axios.create({
  baseURL: "https://team-task-manager-production-8ec1.up.railway.app/api"
});

export default API;