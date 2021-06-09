import React from 'react';

import TitleHeader from 'components/TitleHeader/TitleHeader';
import './AboutSection.css';

const services = [
    "1. Tư vấn pháp luật doanh nghiệp",
    "2. Tư vấn pháp luật dân sự",
    "3. Tư vấn hợp đồng",
    "4. Tư vấn pháp luật đất đai",
    "5. Tư vấn pháp luật lao động",
    "6. Tranh tụng",
    "7. Pháp luật đầu tư",
    "8. Pháp luật hình sự"

];

function AboutSection(){
    return(
        <div className = "AboutSection">
            <div className="about-content">
                <TitleHeader 
                    title = "Giới thiệu"
                    subTitle = ""
                    subSpan = ""
                />
                <div className="aboutUs">Công ty luật Hồng Bách và Cộng sự được hình thành và phát 
                triển bởi đội ngũ Luật sư năng động, có tinh thần trách nhiệm cao và tận tâm với công việc. 
                Với kiến thức, kỹ năng và kinh nghiệm được tích luỹ của mỗi cá nhân cũng như tập thể thành viên, 
                Công ty luật Hồng Bách và Cộng sự cung cấp dịch vụ pháp lý: 
                {services.map((service, index) => (
                    <p>{service}</p>
                ))}
                </div>
            </div>
            <div className="video-intro">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/B-In3Txs6bY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            
            
        </div>

    );
}

export default AboutSection;