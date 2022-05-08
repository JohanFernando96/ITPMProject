import axios from "axios";

const url = "http://localhost:5000/Donations";

export const getDonations = async (id) => {
  id = id || ""; 
  return await axios.get(`${url}/${id}`); 
};

export const addDonation = async (donation) => {
  return await axios.post(`${url}/add`, donation);  
};

export const editDonation = async (id, donation) => {
  return await axios.put(`${url}/${id}`, donation);
};

export const deleteDonation = async (id) => {
  return await axios.delete(`${url}/${id}`);
};