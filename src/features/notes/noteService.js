import axios from "axios";

const api = axios.create({
  baseURL:
    "https://chrono-watch-care-production-7a92.up.railway.app/api",
  withCredentials: true,
});

// Fetch Notes
const fetchNotes = async (id, token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.get(`/service/${id}/note`, options);

  return response.data;
};

// Add Note
const addNote = async (formData, token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.post(
    `/service/${formData.id}/note`,
    formData,
    options
  );

  return response.data;
};

const noteService = {
  fetchNotes,
  addNote,
};

export default noteService;