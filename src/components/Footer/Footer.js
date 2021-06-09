import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';

import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="ft-contact">
                <p className="ft-title">Viện Ứng dụng Khoa học <br className="br"/> Công nghệ và Luật pháp</p>
                <p style={{color:"#999999", marginTop:"0px", fontSize:"16px",textAlign:"center"}}>( Trang đang xây dựng, thử nghiệm )</p>
                <div>
                    <PhoneIcon />
                    <span>024.6299.6666</span>
                </div>
                <div>
                    <MailOutlineIcon />
                    <span>tronglinhmta0611@gmail.com</span>
                </div>
                <div>
                    <HomeIcon />
                    <span>Phòng 403, số 85 Nguyễn Chí Thanh, phường Láng Hạ, quận Đống Đa, Hà Nội.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
