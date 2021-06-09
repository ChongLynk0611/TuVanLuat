import React from 'react'
import Button from '@material-ui/core/Button';

import './ServiceItem.css';

const ServiceItem = (props) => {
    const {id ,icon, title, content} = props;
    return (
        <div className="Service-item">
            <div className="face">
                {icon}
                <div className="svs-title">{title}</div>
                <div className="svs-subTitle">{content}</div>
            </div>
            <div className="back">
                {icon}
                <div className="svs-title">{title}</div>
                <Button 
                    variant="contained" 
                    style={{borderRadius:"20px", height:"43px", width:"50%",backgroundColor:"#9e7247",marginTop:"20px"}}
                    href={`/TuVan/${id}`}
                >
                Chi tiết
                </Button>
            </div>
            
        </div>
    )
}

export default ServiceItem
