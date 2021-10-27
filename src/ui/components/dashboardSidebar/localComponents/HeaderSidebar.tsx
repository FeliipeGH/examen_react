import React from 'react';
import {HeaderSidebarInterface} from "../interfaces/HeaderSidebarInterface";
import {makeStyles} from "@material-ui/core/styles";
import {headerSidebarStyles} from "../styles/headerSidebarStyles";
import {Box} from "@material-ui/core";

// @ts-ignore
const useStyles = makeStyles(headerSidebarStyles);
export const HeaderSidebar = ({title, isOpenTemporalMenu, logo, isMini,}: HeaderSidebarInterface) => {

    const classes = useStyles();
    const logoTitleClass = isMini && isOpenTemporalMenu ? classes.logoTitle + " " + classes.logoTitleMini : classes.logoTitle;

    return (
        <Box className={classes.logoContainer}>
            <Box className={classes.logoImgContent}>
                <img src={logo} alt={title}/>
            </Box>
            <Box className={logoTitleClass}>
                {title}
            </Box>
        </Box>
    );
};