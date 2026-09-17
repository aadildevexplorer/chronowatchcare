import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Complaint Raised
const raiseComplaint = async (formData, token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.post("/service", formData, options);

  return response.data;
};

// Complaint get
const fetchComplaints = async (token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.get("/service", options);

  return response.data;
};

// Single complaint by ID
const fetchComplaint = async (id, token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.get(`/service/${id}`, options);

  return response.data;
};

// Update complaint
const updateComplaint = async (id, token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await api.put(
      `/service/${id}`,
      { status: "closed" },
      options
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const watchService = {
  raiseComplaint,
  fetchComplaints,
  fetchComplaint,
  updateComplaint,
};

export default watchService;