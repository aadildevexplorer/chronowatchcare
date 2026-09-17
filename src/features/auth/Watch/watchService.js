import axios from "axios";

// Complaint Raised

const raiseComplaint = async (formData, token) => {
  let options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post("/api/service", formData, options);
  return response.data;
};

// Complaint get

const fetchComplaints = async (token) => {
  let options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/service", options);
  // console.log(response.data);
  return response.data;
};

// for Single id

const fetchComplaint = async (id, token) => {
  let options = {
    headers: {
      authorization: `Bearer${token}`,
    },
  };

  const response = await axios.get(`/api/service/${id}`, options);
  return response.data;
};

// for complaint

const updateComplaint = async (id, token) => {
  let options = {
    headers: {
      authorization: `Bearer${token}`,
    },
  };

  try {
    const response = await axios.put(
      `/api/service/${id}`,
      { status: "closed" },
      options,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const watchService = {
  raiseComplaint,
  fetchComplaints,
  fetchComplaint,
  updateComplaint,
};

export default watchService;
