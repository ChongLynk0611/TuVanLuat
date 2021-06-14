import React, {useState, useEffect} from 'react';
import ConversationList from '../../components/ConversationList/index';
import MessageList from '../../components/MessageList/index';


import './Messenger.css';

import loginApi from 'api/loginApi';
import fetchData from 'hooks/fetchData';

export default function Messenger(props) {
  const [idUser, setIdUser] = useState('');
  const [idTuVan, setIdTuVan] = useState('');

  useEffect(() => {
    fetchData(loginApi.getAuth, setIdUser);
  }, [])

  const onClick = (id_TuVan) => {
    return () => {
      setIdTuVan(id_TuVan);
    }
  }

  return (
    <div className="messenger">
      {
        idUser && <div className="scrollable sidebar">
          <ConversationList idUser = {idUser.id_User} onClick = {onClick}/>
        </div>
      }
      {
        idUser && <div className="scrollable content">
          <MessageList idTuVan = {idTuVan} idUser = {idUser.id_User}/>
      </div>
      }
      
    </div>
  );
}