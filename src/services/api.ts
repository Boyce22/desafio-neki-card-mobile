import { AppError } from '../utils/AppError';
import axios from 'axios'

const api = axios.create({
    baseURL: "http://10.0.2.2:8080/api"
});

api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.message))
    } else {
        return Promise.reject(error)
    }
})


export { api }