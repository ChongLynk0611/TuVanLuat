import React from 'react'
import PropTypes from 'prop-types'

import './ServiceDestopItem.css';

function ServiceDestopItem(props) {
    const {icon, title, content, isCenter, isLeft, isRight} = props;

    const center = isCenter ? "isCenter":"";
    const boderLeft = isLeft ? "boderLeft":"";
    const boderRght = isRight ? "boderRight":"";
    return (
        <div className= {`ServiceMobileItem ${center} ${boderLeft} ${boderRght}`}>
            <div>{icon}</div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

ServiceDestopItem.propTypes = {
    icon:PropTypes.object,
    title: PropTypes.string,
    content: PropTypes.string,
    isCenter: PropTypes.bool,
    isLeft:PropTypes.bool
}

export default ServiceDestopItem

