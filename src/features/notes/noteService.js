import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const fetchNotes = async (id, token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.get(`/service/${id}/note`, options);

  return response.data;
};

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