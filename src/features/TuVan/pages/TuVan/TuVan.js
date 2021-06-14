import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

import Lawyer from '../../components/Lawyers/Lawyers';
import './TuVan.css';

import loginApi from 'api/loginApi';
import LuatSuApi from 'api/LuatSuApi';
import fetchData from 'hooks/fetchData';

function TuVan() {
    const {id} = useParams();
    const [idUser, setIdUser] = useState();
    const [lawyers, setLawyers] = useState();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        fetchData(LuatSuApi.getLuatSu, setLawyers , ()=>{}, {id, page, perPage});
        fetchData(loginApi.getAuth, setIdUser);
    }, []);

    return (
        <div className="TuVan">
            <h1> Danh sách luật sư </h1>
            <div className="T-DSLuatSu">
                {lawyers && 
                    lawyers.map((lawyer, index) => (
                        <Lawyer lawyer = {lawyer} idUser = {idUser}/>
                    ))
                }
            </div>
            
        </div>
    )
}

export default TuVan
