import axios from "axios";

const api = axios.create({
  baseURL: "https://chrono-watch-care-2.onrender.com/api",
  withCredentials: true,
});

// Fetch Users
const fetchUsers = async (token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.get("/admin/users", options);

  return response.data;
};

// Fetch Watches
const fetchWatches = async (token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.get("/admin/watches", options);

  return response.data;
};

// Fetch Notes
const fetchNotes = async (token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.get("/admin/notes", options);

  return response.data;
};

const adminService = {
  fetchUsers,
  fetchWatches,
  fetchNotes,
};

export default adminService;
