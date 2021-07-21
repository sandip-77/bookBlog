/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 10,
        [theme.breakpoints.up('md')]:{
            margin: "10px 50px",
        }
    },
    navbar:{
        display: 'flex',
        alignItems:'center',
        justifyContent:"space-between"
    },
    social: {
        display: 'none',
        [theme.breakpoints.up('md')]:{
            display:'flex',
            alignItems:"center",
        }
    },
    socialGrid:{
        display: 'none',
        [theme.breakpoints.up('md')]:{
            display:'flex',
            alignItems:"center",
        }
    },
    navbrand: {
        display: 'block',
        fontSize:10,
        [theme.breakpoints.up('md')]:{
            display:'flex',
            alignItems:"center",
            justifyContent:"center",
            fontSize:14,
        }
    },
    icon:{
        margin:5
    },
    title:{
        fontFamily:"Antic Didone",
        fontSize:34,
        borderBottom: "2px solid #444444",
        [theme.breakpoints.up('md')]:{
            fontSize: 48
        }
    },
    menubarContainer:{
        display: 'flex',
        alignItems:"center",
        justifyContent:"flex-end"
    },
    menubar:{
        width: "32px",
        position: 'absolute',
        cursor:'pointer',
        zIndex:999,
    },
    topBar:{
        height: 2,
        width:"60%",
        backgroundColor: "#444444",
        borderRadius:'10%',
        position:'relative'
    },
    middleBar:{
        height: 2,
        width:"100%",
        backgroundColor: "#444444",
        margin: "6px 0",
        borderRadius:"10%"
    },
    bottomBar:{
        height: 2,
        width:"60%",
        backgroundColor: "#444444",
        position: 'absolute',
        right:0,
        borderRadius:"10%"
    },
    menubarOpen:{
        zIndex:999,
        width: "32px",
        position: 'absolute',
        cursor:'pointer',
        '& $topBar ':{
            transition: theme.transitions.create(["transform"], {
                duration: theme.transitions.duration.enteringScreen
              }),  
            transform: 'rotate(45deg) translate(3px, 0)',
            width:'50%'
        },
        '& $bottomBar ':{
            transition: theme.transitions.create(["transform"], {
                duration: theme.transitions.duration.enteringScreen
              }),
            transform: 'rotate(45deg) translate(-3px, 0)',
            width:'50%'
        },
        '& $middleBar ':{
             transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.enteringScreen
          }),
            transform: 'rotate(-45deg)',
            width: '100%'
        }
    },
    menubarClose:{
        zIndex:999,
        width: "32px",
        position: 'relative',
        cursor:'pointer',
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.enteringScreen
          }),
        '& $topBar ':{
            transition: theme.transitions.create(["transform"], {
                duration: theme.transitions.duration.enteringScreen
              }),
            transform: 'rotate(0)',
            width:'60%'
        },
        '& $bottomBar ':{
            transition: theme.transitions.create(["transform"], {
                duration: theme.transitions.duration.enteringScreen
              }),
            transform: 'rotate(0)',
            width:'60%'
        },
        '& $middleBar ':{
            transition: theme.transitions.create(["transform"], {
                duration: theme.transitions.duration.enteringScreen
              }),
            transform: 'rotate(0)',
            width: '100%'
        }
    },
    sideMenu:{
        fontFamily:"Antic Didone",
        textAlign: 'center',
        position:'fixed',
        width:'100vw',
        height: '100vh',
        background:'#f7e9e4',
        right: 0,
        top:0,
        [theme.breakpoints.up('sm')]:{
            width:"55vw"
        },
        [theme.breakpoints.up('md')]:{
            width:"30vw"
        },
    },
    sideMenuOpen:{
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.complex
          }),
          transform:'translate3d(0, 0 , 0)'
    },
    sideMenuClose:{
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.enteringScreen
          }),
          transform:'translate3d(0, -100% , 0)',
          [theme.breakpoints.up('sm')]:{
            transform:'translate3d(100%, 0 , 0)',
        },
    },
    Sidemununavbrand:{
        marginTop: '10vh',
        display: 'block',
        fontSize:12,
        fontFamily:'ROSARIO',
        [theme.breakpoints.up('md')]:{
            display:'flex',
            alignItems:"center",
            justifyContent:"center",
        },
        '& span':{
            fontFamily:"Antic Didone",
            fontSize: 40,
            borderBottom: "2px solid #444444",
        }
    },
    pages:{
        marginTop:50,
        '& div':{
            cursor:"pointer",
            fontSize: 34,
            margin: '15px 0'
        }
    },
    copyright:{
        marginTop: 100,
        fontSize: 19,
        margin: "70px 10px 0px 10px"
    },
    sideMenuIcons:{
        marginTop: 30,
        '& svg':{
            cursor:"pointer",
            fontSize: 28
        }
    }

}));

const date = new Date();
const year = date.getFullYear();


const Navbar = () => {
    const classes = useStyles();


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [clicked, setclicked] = useState(false);

    const manuOpener =() => {
        setIsMenuOpen(!isMenuOpen);
        setclicked(true)
    }


    // const location = useLocation();
    // console.log(location.pathname);
    
    return (
        <div className={classes.root}>
            <Grid className={classes.navbar} container>
                <Grid className={classes.socialGrid} item xs={6} md={4}>
                    <Container className={classes.social} maxWidth='sm'>
                        <FacebookIcon className={classes.icon}/>
                        <TwitterIcon className={classes.icon}/>
                        <InstagramIcon className={classes.icon}/>
                    </Container>
                </Grid>
               
                <Grid  item xs={6} md={4}>
                    <Container className={classes.navbrand} maxWidth='sm'>
                        <Box>
                        <p style={{marginBottom: 5}}><span className={classes.title}>READN</span></p>
                        THE BOOKS AMONG US
                        </Box>
                    </Container>
                </Grid>

                <Grid item xs={6} md={4}>
                    <Container className={ classes.menubarContainer }  maxWidth='sm'>
                        <div onClick={manuOpener} className={clicked ? isMenuOpen ? classes.menubarOpen : classes.menubarClose : classes.menubar}>
                            <div className={classes.topBar}></div>
                            <div className={classes.middleBar}></div>
                            <div className={classes.bottomBar}></div>
                        </div>
                    </Container>
                </Grid>

            </Grid>

            <div className={ clsx(classes.sideMenu, isMenuOpen ? classes.sideMenuOpen : classes.sideMenuClose) }>
                <Box className={classes.Sidemununavbrand} maxWidth='sm'>
                    <Box>
                    <p style={{marginBottom: 5}}><span>READN</span></p>
                    THE BOOKS AMONG US
                    </Box>
                </Box>
                <Box className={classes.pages}>
                <div style={{color:'#a84a49'}}>Home</div>
                <div>Reviews</div>
                <div>Contact</div>
                </Box>
                
                <Box className={classes.sideMenuIcons}>
                    <FacebookIcon className={classes.icon}/>
                    <TwitterIcon className={classes.icon}/>
                    <InstagramIcon className={classes.icon}/>
                </Box>

                <Box className={classes.copyright}>
                    ©{year} by Readn. Desinged & Developed by <a rel="noreferrer" style={{color:'#a84a49', textDecoration:'none'}} target='_blank' href="https://sandiprout.vercel.app/">Sandip Rout</a>. 
                </Box>
            </div>
        </div>
    )
}

export default Navbar
