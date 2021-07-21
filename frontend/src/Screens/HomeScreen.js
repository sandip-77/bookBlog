import { Box, makeStyles } from '@material-ui/core';
import React from 'react';



const useStyles = makeStyles((theme) => ({
    rootHome: {
        flexGrow: 1,
    },
    introText:{
        textAlign:'center',
        fontSize: 48,
        color: 'rgba(68, 68, 68, 0.7)',
        letterSpacing:'0.06em',
        margin: '50px 15px',
        [theme.breakpoints.down('sm')]:{
            fontSize:28,
        }
    },
    intro:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        
    },
    videoDiv:{ 
        overflow: 'hidden',
        backgroundSize:'cover',
        "& video":{
            width: "95vw",
            [theme.breakpoints.up('md')]:{
                width: '75vw'
            }
        }
    }
}))

// document.getElementById('video').play();

const HomeScreen = () => {
    const classes = useStyles();

    return (
        <div className={classes.rootHome}>
            <Box justifyContent='center' className={classes.intro}>
                <p className={classes.introText}>In search for the next best book</p> 
                <div className={classes.videoDiv}>
                    <video autoPlay loop muted>
                        <source src='/blog-vdo.mp4' type='video/mp4' />
                    </video>
                </div>
            </Box>
        </div>
    )
}

export default HomeScreen;
