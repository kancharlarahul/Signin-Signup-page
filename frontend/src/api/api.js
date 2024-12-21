import axios from "axios";

// Replace 'http://localhost:5000' with your backend's URL if deployed
const API = axios.create({ baseURL: "http://localhost:5000" });

export default API;
