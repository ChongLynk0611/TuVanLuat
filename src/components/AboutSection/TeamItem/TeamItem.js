import React from 'react'

import './TeamItem.css';
const TeamItem = (props) => {
    const {avatar,name,position} = props;
    return (
        <div className="TeamItem">
            <img src={avatar} alt="img"/>
            <div className="team-info" >
                <div className="team-name">{name}</div>
                <div className="team-CN">{position}</div>
            </div>
        </div>
    )
}

export default TeamItem
