import React from 'react';
import {Box, Container} from "@material-ui/core";
import {AuthFooterContent} from "./localComponents/AuthFooterContent";

export const AuthFooter = () => {
    return (
        <Box>
            <Container>
                <AuthFooterContent/>
            </Container>
        </Box>
    );
};