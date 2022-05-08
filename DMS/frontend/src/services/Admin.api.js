import axios from "axios";

const url = "http://localhost:5000/Donations";

export const getadmin = async (id) => {
  id = id || ""; 
  return await axios.get(`${url}/${id}`); 
};

export const addadmin = async (admin) => {
  return await axios.post(`${url}/add`, admin);  
};

export const editAdmin = async (id, admin) => {
  return await axios.put(`${url}/${id}`, admin);
};


export const deleteadmin = async (id) => {
  return await axios.delete(`${url}/${id}`);
};