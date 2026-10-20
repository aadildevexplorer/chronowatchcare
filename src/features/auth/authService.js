import axios from "axios";

const api = axios.create({
  baseURL: "https://chrono-watch-care-2.onrender.com/api",
  withCredentials: true,
});

const register = async (formData) => {
  const response = await api.post("/user", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const login = async (formData) => {
  const response = await api.post("/user/login", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const verification = async (formData) => {
  const response = await api.post("/user", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

export default {
  register,
  login,
  verification,
};
