import axiosClient from './axiosClient';

const lustSuApi = {
    getLuatSu: (params) => {
        const url = `/lawyer/${params.id}?page=${params.page}&perPage=${params.perPage}`;
        return axiosClient.get(url);
    },
    postTuVan: (data) => {
        const url = `/lawyer/TuVan`;
        return axiosClient.post(url, data);
    }
}

export default lustSuApi;