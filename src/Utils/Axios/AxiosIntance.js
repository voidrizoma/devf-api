import axiosClient from "./BaseUrl";

export const getRequest = (URL) => {
    return axiosClient.get(`${URL}`)
}
