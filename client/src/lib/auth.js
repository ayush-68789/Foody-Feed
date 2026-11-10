import axios from "axios";

export async function authRequest(path, data) {
    try {
        const response = await axios.post(`/auth/${path}`, data, { withCredentials: true });
        return response.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || "Request failed. Please try again.");
    }
}
