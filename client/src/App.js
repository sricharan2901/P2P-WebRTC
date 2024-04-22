import React, { useEffect, useState } from "react";import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      marginTop: '-2px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '1950px',
      height: '120px',
      backgroundColor: 'transparent',  
      fontFamily: 'poppins',
      fontSize: '20px',
      paddingTop: '-5px',
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    timeBar: {
      color: 'aliceblue',
      paddingLeft: '1350px',
      fontFamily: 'poppins',
      fontSize: '40px',
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
}));

const App = () => {
    const classes = useStyles();
    const [clockState, setClockState] = useState();

    useEffect(() => {
      setInterval(() => {
          const date = new Date();
          setClockState(
              date.toLocaleTimeString(navigator.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true
              })
          );
      }, 1000);
    }, []);

    return(
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">
                    P2P Chat
                </Typography>
                <Typography variant="h6" sx={{ color: "white" }} className={classes.timeBar}>
                    {clockState}
                </Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    )
}

export default App
