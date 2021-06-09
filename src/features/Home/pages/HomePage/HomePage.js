import React from 'react';

import ServiceBanner from '../../components/ServiceBanner/ServiceBanner';
import AboutSection from 'components/AboutSection/AboutSection';
import ServiceSection from 'components/ServiceSection/ServiceSection';
import Numbers from 'components/Number/Number';

import './HomePage.css';

function HomePage(props) {
    return (
        <div className="HomePage">
            <ServiceBanner /> 
            <AboutSection />
            <ServiceSection />
            <div className="Number-display">
                <Numbers />
            </div>
        </div>
    )
}


export default HomePage;

