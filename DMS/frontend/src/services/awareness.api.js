import axios from "axios";

const url = "http://localhost:5000/awareness";

export const getPosts = async (id) => {
  id = id || ""; 
  return await axios.get(`${url}/${id}`); 
};

export const addPost = async (awareness) => {
  return await axios.post(`${url}/add`, awareness);  
};

export const editPost = async (id, awareness) => {
  return await axios.put(`${url}/${id}`, awareness);
};

export const deletePost = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const updatePost = async (awareness) => {
  return await axios.post(`${url}/update`, awareness);  
};