import React, {useEffect} from 'react';
import shave from 'shave';

import './ConversationListItem.css';

export default function ConversationListItem(props) {
  const { Image, Ten, id_TuVan} = props.data;
  const {onClick} = props;

  useEffect(() => {
    shave('.conversation-snippet', 20);
  })

  return (
    <div className="conversation-list-item" onClick={onClick(id_TuVan)}>
      <img className="conversation-photo" src={`${process.env.REACT_APP_API_URL}/${Image}`} alt="conversation" />
      <div className="conversation-info">
        <h1 className="conversation-title">{ Ten }</h1>
        <p className="conversation-snippet">abc</p>
      </div>
    </div>
  );
}