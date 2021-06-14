import React, {useEffect, useState} from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import io from 'socket.io-client';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './MessageList.css';

import fetchData from 'hooks/fetchData';
import TinNhanApi from 'api/TinNhanApi';

let socket ;

export default function MessageList(props) {
  const {idTuVan, idUser} = props;
  const [status, setStatus] = useState(-1);
  const [messages, setMessages] = useState([]);
  const [sendMess, setSendMess] = useState('');

  useEffect(() => {
    socket = io(process.env.REACT_APP_API_URL);
    fetchData(TinNhanApi.getTinNhan, setMessages, () => {}, {idTuVan});
    fetchData(TinNhanApi.getStatus, setStatus, () => {}, {idTuVan});
    socket.emit('join', {idTuVan, idUser})

    return () => {
      socket.off();
    }

  },[idTuVan])

  useEffect(() => {
    fetchData(TinNhanApi.getTinNhan, setMessages, () => {}, {idTuVan});
    socket.on('resStatus', ({status}) => {
      setStatus(status);
    })
  }, [status])

  useEffect(() => {
    socket.on('mess', (mess) => {
      setMessages(mess.mess);
    })
  }, [messages]);

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      // let previous = messages[i - 1];
      let current = messages[i];
      // let next = messages[i + 1];
      let isMine = current.userSend === 1;
      
      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          data={current}
        />
      );
      i += 1;
    }
    if(status.TrangThai === 0 ){
      return (
        // có thể chấp nhận yêu cầu hoặc hủy bỏ
        <div>
          <Button onClick={accepttuVan}>Chấp nhận</Button>
          <Button onClick={tuChoi}>Từ chối</Button>
        </div>
      )
    }
    if(status.TrangThai === 1){
      console.log(messages)
      return tempMessages;
    }
    if(status.TrangThai === 2){
      return <div>Phiên tư vấn đã kết thúc</div>
    }
  }

  const sendMessHanlde = (event) => {
    if(sendMess){
      socket.emit('sendMess', {sendMess, idTuVan, isSend:1});
    }
    setSendMess('');
  }

  const onChangeHanlde = (event) => {
    setSendMess(event.target.value);
  }

  const accepttuVan = () => {
    if(idTuVan){
      socket.emit('accept', {idTuVan});
    }
  }

  const tuChoi = () => {
    socket.emit('tuChoi',{idTuVan});
  }

  return(
    <div className="message-list">
      <Toolbar
        title="Tin nhắn tư vấn"
        rightItems={[
          <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
          <ToolbarButton key="video" icon="ion-ios-videocam" />,
          <ToolbarButton key="phone" icon="ion-ios-call" />
        ]}
      />

      <div className="message-list-container">{renderMessages()}</div>

      <Compose
        sendMess = {sendMessHanlde}
        onChange = {onChangeHanlde}
        values={sendMess}
       rightItems={[
        <ToolbarButton key="photo" icon="ion-ios-camera" />,
        <ToolbarButton key="image" icon="ion-ios-image" />,
        <ToolbarButton key="audio" icon="ion-ios-mic" />,
        <ToolbarButton key="money" icon="ion-ios-card" />,
        <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
        <ToolbarButton key="emoji" icon="ion-ios-happy" />
      ]}/>
    </div>
  );
}