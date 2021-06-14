import axiosClient from './axiosClient';

const loginApi = {
    postLogin: (data) => {
        const url = "/auth/login";
        return axiosClient.post(url, data);
    },
    postLoginLawyer: (data) => {
        const url="auth/login/lawyer";
        return axiosClient.post(url, data);
    },
    getAuth: () => {
        const url = "/auth";
        return axiosClient.get(url);
    }
}

export default loginApi;