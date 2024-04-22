import React, { useContext } from "react";
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';

import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      borderRadius: '20px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      borderRadius: '15px',
      backgroundColor: 'transparent',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
        margin: '50px',
        padding: '15px',
        backgroundColor: 'transparent',
        borderRadius: '20px',
    },
    nameBar: {
        color: 'white',
        fontFamily: 'poppins',
        textAlign: 'center',
        width: '550px',
    },
}));

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();

    return(
        <Grid container className={classes.gridContainer}>
            {
                stream && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                            <Typography variant="h5" gutterBottom className={classes.nameBar}>
                                {name || 'Guest User'}
                            </Typography>
                        </Grid>
                    </Paper>
            )}

            {
                callAccepted && !callEnded && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <video playsInline ref={userVideo} autoPlay className={classes.video} />
                            <Typography variant="h5" gutterBottom className={classes.nameBar}>
                                {call.name || 'Guest User'}
                            </Typography>   
                        </Grid>
                    </Paper>
            )}
        </Grid>
    );
};

export default VideoPlayer;
