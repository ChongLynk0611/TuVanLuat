import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import EqualizerIcon from '@material-ui/icons/Equalizer';

import ServiceMobileItem from './ServiceMobileItem/ServiceMobileItem';
import ServiceDestopItem from './ServiceDestopItem/ServiceDestopItem';

import './ServiceBanner.css';

const services = [
    {
        icon:<EqualizerIcon />,
        iconDestop: <EqualizerIcon style={{fontSize:"60px",color:"#fff"}}/>,
        title: "Khoa học & Công nghệ",
        subTitle:"Cung cấp các giải pháp và dịch vụ công nghệ thông tin và bảo mật cho các cơ quan chính phủ,tổ chức tài chính,...",
        isCenter:false,
        isLeft:true,
        isRight:false
    },
    {
        icon: <BusinessCenterIcon />,
        iconDestop: <BusinessCenterIcon style={{fontSize:"60px",color:"#fff"}}/>,
        title: "Đào tạo",
        subTitle:"Đào tạo về chuyên ngành pháp luật với các trình độ Đại học, Cao học, Văn bằng 2.",
        isCenter:true,
        isLeft:false,
        isRight:false
    },
    {
        icon: <PeopleIcon />,
        iconDestop: <PeopleIcon style={{fontSize:"60px",color:"#fff"}}/>,
        title: "Tư vấn pháp luật",
        subTitle:"Tư vấn cho khách hàng đầy đủ các dịch vụ về luật pháp với đội ngũ chuyên nghiệp.",
        isCenter:false,
        isLeft:false,
        isRight:true
    }
    
]

const ServiceMobile = () => (
    <div className="ServiceMobile">
        {
            services.map((service, index) => (
                <ServiceMobileItem
                    icon = {service.icon}
                    title = {service.title}
                    subTitle = {service.subTitle}
                />
            ))
        }
    </div>
);

const ServiceDestop = () => (
    <div className="ServiceDestop">
        {
            services.map((service, index) => (
                <ServiceDestopItem
                    icon = {service.iconDestop}
                    title = {service.title}
                    content = {service.subTitle}
                    isCenter = {service.isCenter}
                    isLeft = {service.isLeft}
                    isRight = {service.isRight}
                    key = {index}
                />
            ))
        }
    </div>
)

function ServiceBanner(){
    return(
        <div className="ServiceBanner">
            <ServiceDestop />
            <ServiceMobile />
        </div>
        
    );
    
}

export default ServiceBanner;