import axios from "axios";

const url = "http://localhost:5000/Volunteer";

export const getVolunteer = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addVolunteer = async (volunteer) => {
    return await axios.post(`${url}/add`, volunteer);  
}

export const editVolunteer = async (id, volunteer) => {
    return await axios.put(`${url}/${id}`, volunteer);
}

export const deleteVolunteer = async(id) => {
    return await axios.delete(`${url}/${id}`);
};


