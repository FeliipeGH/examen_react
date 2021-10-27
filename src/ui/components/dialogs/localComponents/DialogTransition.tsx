import React from 'react';
import {Slide} from "@material-ui/core";


export const DialogTransition = React.forwardRef(function Transition(props, ref) {
    // @ts-ignore
    return <Slide direction="down" ref={ref} {...props} timeout={800}/>;
});