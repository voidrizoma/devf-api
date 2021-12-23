import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://api.fbi.gov/wanted/v1/",
    headers: {
        "Content-Type":"application/json; charset=utf8",
    }
})

export default axiosClient;
