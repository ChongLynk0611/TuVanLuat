import React, {useEffect,useState} from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import DescriptionIcon from '@material-ui/icons/Description';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import GavelIcon from '@material-ui/icons/Gavel';
import Button from '@material-ui/core/Button';

import TitleHeader from 'components/TitleHeader/TitleHeader';
import ServiceItem from './ServiceItem/ServiceItem';

import './ServiceSection.css';


const serviceItems = [
    {
        id:1,
        icon:<LanguageIcon style={{color:"#9e7247", fontSize:"45px"}}/>,
        title: "Luật doanh nghiệp",
        content: `Tư vấn pháp luật doang nghiệp liên quan đến thành lập doanh nghiệp,
                loại hình doanh nghiệp, đặt tên công ty, ngành nghề kinh doanh, vốn doanh nghiệp,...`
    },
    {
        id:2,
        icon: <AccessibilityIcon style={{color:"#9e7247", fontSize:"45px"}}/>,
        title: "Luật dân sự",
        content:`Tư vấn pháp luật dân sự liên quan đến hợp đồng dân sự, dịch vụ tư vấn thu hồi nợ, thừ kế, bồi thường thiệt hại,
                Đại diện cho đương sự, dịch vụ luật sư và các dịch vụ khác theo yêu cầu.`
    },
    {
        id:3,
        icon: <DescriptionIcon style={{color:"#9e7247", fontSize:"45px"}}/>,
        title: "Tư vấn hợp đồng",
        content: `Tư vấn, soạn thảo hợp đồng nói chung và hợp đồng thương mại nói riêng yêu cầu rất nhiều kỹ năng cùng những hiểu
                biết chuyên sâu của các quy định pháp luật có liên quan.`
    },
    {
        id:4,
        icon: <HomeIcon style={{color:"#9e7247", fontSize:"45px"}}/>,
        title: "Tư vấn đất đai",
        content: `Cung cấp đầy đủ các dịch vụ tư vấn về đất đai, nhà đất, mua bán, chuyển nhượng, thừa kế với đội ngũ luật sư và cộng sự giàu kinh nghiệm`
    },
    {
        id:5,
        icon: <WorkIcon style={{color:"#9e7247", fontSize:"45px"}}/>,
        title: "Luật lao động",
        content: "Tư vấn pháp luật lao động liên quan đến soạn thảo hợp đồng lao động, nội quy, quy chế lao động, các vấn đề liên quan đến bảo hiểm xã hội,..."
    },
    {
        id:6,
        icon: <GavelIcon style={{color:"#9e7247", fontSize:"45px"}}/>,
        title: "Tranh tụng",
        content: `Bào chữa, bảo vệ quyền lợi của khách hàng tham gia giải quyết các tranh chấp dân sự, kinh tế, thương mại, lao động, hôn nhân và gia đình tại tòa án, trọng tài.`
    }
]

function ServiceSection(){

    return(
        <div className="ServiceSection">
            <TitleHeader 
                title = "Dịch vụ"
                subTitle = "Đầy đủ các dịch vụ luật pháp"
                subSpan = "Đội ngũ giàu kinh nghiệm"
                isDark = {true}
            />
            <div className="SVS-Content">
                {serviceItems.map((service, index) => (
                    <ServiceItem
                        id = {service.id}
                        icon={service.icon}
                        title= {service.title}
                        content={service.content}
                        key={index}
                    />
                ))}
                
            </div>
            

        </div>
    );
}

export default ServiceSection;