import React from 'react'

import './ServiceMobileItem.css';
const ServiceMobileItem = (props) => {
    const {icon, title, subTitle} = props

    return (
        <div className ='ServiceBannerItem button one'>
            <div className="SV-icon">
                {icon}
            </div>
            <div className="SV-content">
                <div className="SV-title">{title}</div>
                <div className="SV-subTitle">{subTitle}</div>
            </div>
        </div>
    )
}

export default ServiceMobileItem;
