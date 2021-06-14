import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';

import './ConversationList.css';

import fetchData from 'hooks/fetchData';
import TinNhanApi from 'api/TinNhanApi';

export default function ConversationList(props) {
  const {idUser, onClick} = props;
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    fetchData(TinNhanApi.getConversation, setConversations, () =>{}, {idUser})
  },[])

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {
          conversations.map((conversation, index) =>
            <ConversationListItem
              onClick = {onClick}
              key={index}
              data={conversation}
            />
          )
        }
      </div>
    );
}