import React from 'react'
import PropTypes from 'prop-types';

import './TitleHeader.css';

const TitleHeader = (props) => {
    const {title} = props;
    
    return (
        <div className="TitleHeader">
            {title}
        </div>
    )
}

TitleHeader.propTypes = {
    title:PropTypes.string,
}

TitleHeader.defaultProps = {
    title:""
}

export default TitleHeader
