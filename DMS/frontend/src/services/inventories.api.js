import axios from "axios";

const url = "http://localhost:5000/inventories";

export const getInventories = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addInventory = async (inventory) => {
  return await axios.post(`${url}/add`, inventory);
};

export const editInventory = async (id, inventory) => {
  return await axios.put(`${url}/${id}`, inventory);
};

export const deleteInventory = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
