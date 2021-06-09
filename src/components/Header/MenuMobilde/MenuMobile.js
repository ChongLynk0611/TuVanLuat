import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import BuildIcon from '@material-ui/icons/Build';
import GavelIcon from '@material-ui/icons/Gavel';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TvIcon from '@material-ui/icons/Tv';
import PhonePausedIcon from '@material-ui/icons/PhonePaused';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const useStyles = makeStyles({
  list: {
    width: "auto",
  },
  fullList: {
    width: 'auto',
  },
});

const Menu = [
    {text:"GIỚI THIỆU" , icon : <AccessibilityIcon />,href:"GioiThieu"},
    {text:"KHOA HỌC CÔNG NGHỆ", icon: <BuildIcon />,href:"KHCN"},
    {text:"ĐÀO TẠO", icon: <ImportContactsIcon />,href : "DaoTao"},
    {text:"PHÁP LUẬT", icon: <GavelIcon />, href: "PhapLuat"},
    {text:"DỊCH VỤ", icon: <BusinessCenterIcon />,href: "DichVu"},
    {text:"TIN TỨC", icon: <TvIcon />,href: "TinTuc"},
    {text:"LIÊN HỆ", icon: <PhonePausedIcon />,href: "LienHe"}
]
export default function MenuMobile(props) { 

    const [isOpen, setIsOpen] = React.useState(false);
    const classes = useStyles();

    const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setIsOpen(open);
    };

    const list = (anchor) => (
    <div
        className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        {Menu.map((item, index) => (
            <ListItem button key={index} href={item.href} component="a">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
            </ListItem>
        ))}
        </List>

    </div>
    );

    return (
    <div>
        <React.Fragment key={'left'} >
            <IconButton style={{color:"#fff"}} onClick={() => { setIsOpen(true) }}>
                <MenuIcon 
                    style={{fontSize:"40px"}} 
                />
            </IconButton>
            <Drawer anchor={'left'} open={isOpen} onClose={toggleDrawer(false)}>
            {list('left')}
            </Drawer>
        </React.Fragment>
    </div>
    );
}
