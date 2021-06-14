import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        // 'content-type':'multipart/form-data'
        'content-type':'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    config.headers.authorization = accessToken;
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if(response && response.data){
        return response.data;
    }

    return response;
}, (error) => {
    //hanlde errors
    throw error;
});

export default axiosClient;
