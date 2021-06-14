import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import './Lawyers.css';

import LuatSuApi from 'api/LuatSuApi';
import postData from 'hooks/postData';

const Lawyers = (props) => {
    const history = useHistory();
    const {lawyer, idUser} = props;
    const [status, setStatus] = useState();
    const onClick = (id_LuatSu) => {

        return ()  => {
            const data = {id_LuatSu: id_LuatSu, id_User: idUser.id_User}

            const resirect = () => {
                history.push('/TinNhan');
            }
            postData(LuatSuApi.postTuVan, setStatus, data, resirect);
        }
    }
    return (
        <div className="TeamItem">
            <img src={`${process.env.REACT_APP_API_URL}/${lawyer.Image}`} alt="img"/>
            <div className="team-info" >
                <div className="team-name">{lawyer.Ten}</div>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick = {onClick(lawyer.id_LuatSu)}
                >
                    Tư vấn
                </Button>
            </div>
        </div>
    )
}

export default Lawyers;
