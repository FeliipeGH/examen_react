import React from 'react';
import {Box} from "@material-ui/core";

export const LoadingContent = () => {
    return (
        <Box style={{
            display: "grid",
            width: "100%",
            placeContent: "center",
        }}>
            <Box className="swal2-loader" data-button-to-replace="swal2-confirm swal2-styled"/>
            asd
        </Box>
    );
};

