import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import MenuMobile from '../MenuMobilde/MenuMobile';

import LogoLawyer from 'assets/images/logoLawyer.jpg';
import './BodyHeader.css';

const useStyles = makeStyles((theme) => ({
    button:{
      color:"#fff",
      marginRight:"20px",
      fontWeight:"bold",
      fontSize:"15px",
      "&:hover": {
        backgroundColor: '#6d6864'
      },
      [theme.breakpoints.down('1620')]:{
        marginRight:"10px"
      },
      [theme.breakpoints.down('1480')]:{
          fontSize:"12px"
      }
    },
}));

const listLinks = [
    {href:"/GioiThieu",text:"Giới thiệu"},
    {href:"/KHCN",text:"Khoa học công nghệ"},
    {href:"/DaoTao",text:"Đào tạo"},
    {href:"/PhapLuat",text:"Pháp luật"},
    {href:"/DichVu",text:"Dịch vụ"},
    {href:"/TinTuc",text:"Tin tức"},
    {href:"/LienHe",text:"Liên hệ"},
];

function BodyHeader(props) {
    const classes = useStyles();

    const LinkItem = ({href, text}) => (
        <Button 
            className={classes.button}
            href={href}
        >{text}</Button>
    );

    return (
        <div className="BodyHeader" >
            <a href="/">
                <img 
                    className="logo" 
                    src={LogoLawyer}  
                    alt="img"  
                />
            </a>
            <div className="Grow"></div>
            <div className="Button">
                {listLinks.map((link,index) => (<LinkItem href={link.href} text={link.text} key={index} />))}
            </div>
            <a 
                href="/TinNhan"
                className="btn from-left"
            >Tư vấn</a>
            <div className="MenuMobile">
                <MenuMobile />
            </div>
        </div>
    )
}


export default BodyHeader