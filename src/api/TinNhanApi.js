import axiosClient from './axiosClient';

const tinNhanApi = {
    getConversation: (params) => {
        const {idUser} = params;
        const url = `/TinNhan/conversation/${idUser}`;
        return axiosClient.get(url);
    },
    getConversationLawyer: (params) => {
        const {id_lawyer} = params;
        const url = `/TinNhan/conversation/Lawyer/${id_lawyer}`;
        return axiosClient.get(url);
    },
    getTinNhan: (params) => {
        const {idTuVan} = params;
        const url = `/TinNhan/TinNhan/${idTuVan}`;
        return axiosClient.get(url);
    },
    getStatus: (params) => {
        const {idTuVan} = params;
        const url = `/TinNhan/Status/${idTuVan}`;
        return axiosClient.get(url);
    }
}

export default tinNhanApi;