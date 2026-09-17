// import axios from "axios";

// const register = async (formData) => {
//   const response = await axios.post("/api/user", formData);
//   localStorage.setItem("user", JSON.stringify(response.data));
//   return response.data;
// };

// const login = async (formData) => {
//   const response = await axios.post("/api/user/login", formData);
//   localStorage.setItem("user", JSON.stringify(response.data));
//   return response.data;
// };

// const verification = async (formData) => {
//   const response = await axios.post("/api/user", formData);
//   localStorage.setItem("user", JSON.stringify(response.data));
//   return response.data;
// };
// const authService = {
//   register,
//   login,
//   verification,
// };

// export default authService;

import axios from "axios";

const api = axios.create({
  baseURL:
    "https://chrono-watch-care-production-7a92.up.railway.app/api",
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