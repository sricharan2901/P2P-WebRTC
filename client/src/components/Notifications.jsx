import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return(
        <>
            {
                call.isRecievedCall && !callAccepted && (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h1>
                            Call from {call.name} ...
                        </h1>
                        <Button variant="contained" color="primary" onClick={answerCall}>
                            Answer
                        </Button>
                    </div>
                )
            }
        </>
    )
}

export default Notifications