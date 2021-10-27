import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {EmailCodeInterface} from "../interfaces/EmailCodeInterface";

export const EmailCodeHeader = ({email}: EmailCodeInterface) => {
    return (
        <Box>
            <Box style={{
                marginTop: "-0.5rem",
            }}>
                <Typography variant="body2" align="center">
                    Ingresa el código enviado a
                </Typography>
            </Box>
            <Typography variant="body2" align="center">
                <Box fontWeight="500" component="b">
                    {email}
                </Box>
            </Typography>
        </Box>
    );
};