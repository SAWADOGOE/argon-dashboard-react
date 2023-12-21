import axios from "axios";

const API_URL = "http://localhost:8000/api";


const getHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: "Bearer votre_token",
});

export function getData(url) {
    return axios.get(`${API_URL}${url}`, { headers: getHeaders() });

}

export function getById(url, id) {
    const apiUrl = `${API_URL}${url}/${id}/`;
    return axios.get(apiUrl, { headers: getHeaders() });
}

export function saveData(url, data) {
    return axios.post(`${API_URL}${url}`, data, { headers: getHeaders() });
}

export function deleteData(url) {
    return axios.delete(`${API_URL}${url}/`, { headers: getHeaders() });
}

export function updateData(url, data) {
    return axios.put(`${API_URL}${url}`, data, { headers: getHeaders() });

}
