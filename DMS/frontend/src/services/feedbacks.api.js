import axios from "axios";

const url = "http://localhost:5000/Donations";

export const getFeedbacks = async (id) => {
  id = id || ""; 
  return await axios.get(`${url}/${id}`); 
};

export const addFeedback = async (feedback) => {
  return await axios.post(`${url}/add`, feedback);  
};

export const editFeedback = async (id, feedback) => {
  return await axios.put(`${url}/${id}`, feedback);
};

export const deleteFeedback = async (id) => {
  return await axios.delete(`${url}/${id}`);
};