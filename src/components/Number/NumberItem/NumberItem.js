import React from 'react'
import PropTypes from 'prop-types'

import './NumberItem.css';

function NumberItem(props) {
    const {style, number, content,isBoder} = props;

    return (
        <div className="NumberItem" style ={isBoder ? {borderRight: "rgb(212 209 209) solid 1px"} : {}}>
            <p style={style}>{number}+</p>
            <span>{content}</span>
        </div>
    )
}

NumberItem.propTypes = {
    style : PropTypes.object,
    number:PropTypes.string,
    content:PropTypes.string,
    isBoder:PropTypes.bool
}

export default NumberItem

