import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import BodyHeader from './BodyHeader/BodyHeader';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex:"10"
    },
    AppBarStyle:{
        backgroundColor:"rgb(0,0,0,0.5)",
        paddingLeft:"5vw",
        paddingRight:"5vw",
        color:"#fff",
        [theme.breakpoints.down('1620')]:{
          paddingLeft:"3vw",
          paddingRight:"3vw"
        },
        [theme.breakpoints.down('1300')]:{
          paddingLeft:"7vw",
          paddingRight:"7vw"
        }
       
    },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
}
  
ScrollTop.propTypes = {
children: PropTypes.element.isRequired,
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
window: PropTypes.func,
};

export default function Header(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div id="back-to-top-anchor"></div>  
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.AppBarStyle}>
          <BodyHeader ></BodyHeader>
        </AppBar>
      </ElevationScroll>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}