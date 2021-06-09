import React from 'react';

import AnhNen from 'assets/images/BannerLaw.jpg';
import './Banner.css';

function Banner(){

    return(
        <div className="Banner">
            <img src={AnhNen} alt="img"/>
            <div className="Content">
            </div>
            <div className="textContent">
                <h1 className="title-Banner">
                    <p>VIỆN ỨNG DỤNG KHOA HỌC CÔNG NGHỆ <br className="br-banner"/>VÀ LUẬT PHÁP</p>
                    <p className="subTitleBanner">Institute for Application of Science Technology and Laws</p>
                </h1>
            </div>
              
        </div>
    );
}

export default Banner;