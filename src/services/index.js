import axios from "axios";

const API_URL = "http://localhost:8000/api";

export function getData(url) {
    return axios.get(`${API_URL}${url}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer votre_token",
        },
    });
}

export function saveData(url, data) {
    return axios.post(`${API_URL}${url}`, data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer votre_token",
        },
    });
}

export function deleteData(url) {
    return axios.delete(`${API_URL}${url}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer votre_token",
        },
    });
}

export function updateData(url, data) {
    return axios.put(`${API_URL}${url}`, data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer votre_token",
        },
    });
}
