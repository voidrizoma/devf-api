import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-Type":"application/json; charset=utf8"
    }
})

export default axiosClient;
