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
import { Link, useLocation } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 10,
        position:'sticky',
        top: 0,
        flexGrow: 1,
        padding: 10,
        [theme.breakpoints.up('md')]:{
            padding: "10px 50px",
        },
        boxShadow: "0px 0 83px 0 #55555514",
        backgroundColor:"#fff"
        
    },
    navbar:{
        display: 'flex',
        alignItems:'center',
        justifyContent:"space-between",
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
        cursor:'pointer',
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
        margin:5,
        cursor:"pointer",
        

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
        zIndex: 100,
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
        cursor:'pointer',
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
        marginTop:'5vh',
        '& div':{
            cursor:"pointer",
            fontSize: 34,
            margin: '15px 0'
        }
    },
    copyright:{
        position:'absolute',
        bottom: '5vh',
        fontSize: 18,
        margin: "70px 15px 0px 15px"
    },
    sideMenuIcons:{
        marginTop: 30,
        '& svg':{
            '&:hover':{
                color:"#a84a49",
            },
            fontSize: 28,
            margin:10
        }
    },
    active:{
        color: "#a84a49"
    },
    notActive:{
        color: "inherit"
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


    const location = useLocation();
    console.log(location.pathname);

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
                        <Link className='link' to="/">
                            <p style={{marginBottom: 5}}><span className={classes.title}>READN</span></p>
                            THE BOOKS AMONG US
                        </Link>
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
                        <Link onClick={manuOpener} className='link' to="/">
                            <p style={{marginBottom: 5}}><span>READN</span></p>
                            THE BOOKS AMONG US
                        </Link>
                        </Box>
                    </Box>
                <Box className={classes.pages}>
                    <div className={location.pathname === '/' ? classes.active : classes.notActive}><Link className='link' onClick={manuOpener} to="/">Home</Link></div> 
                    <div className={location.pathname === '/reviews' ? classes.active : classes.notActive}><Link onClick={manuOpener} className='link' to="/reviews">Reviews</Link></div>
                    <div className={location.pathname === '/about' ? classes.active : classes.notActive}><Link onClick={manuOpener} className='link' to="/about">About</Link></div>
                    <div className={location.pathname === '/contact' ? classes.active : classes.notActive}><Link onClick={manuOpener} className='link' to="/contact">Contact</Link></div>
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
