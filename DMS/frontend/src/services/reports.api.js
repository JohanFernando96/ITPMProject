import axios from "axios";

const url = "http://localhost:5000/reports/Report";

export const getReports = async (id) => {
  id = id || ""; // if function is called without parameter then value of id = ''
  return await axios.get(`${url}/${id}`); // if empty parameter then  http://localhost:5000/reports
};

export const addReport = async (report) => {
  return await axios.post(`${url}/add`, report); // this is the report we created (url , object to post)
};

export const editReport = async (id, report) => {
  return await axios.put(`${url}/${id}`, report);
};

export const deleteReport = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
