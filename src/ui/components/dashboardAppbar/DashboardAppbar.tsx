import React from 'react';
import {dashboardAppbarStyles} from "./styles/dashboardAppbarStyles";
import {makeStyles} from "@material-ui/core/styles";
import {DashboardAppbarInterface} from "./interfaces/DashboardAppbarInterface";
import {AppBar, Hidden, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

// @ts-ignore
const useStyles = makeStyles(dashboardAppbarStyles);
export const DashboardAppbar = ({
                                    title,
                                    handleMenuDesktop,
                                    handleMenuMobile,
                                    openMenuMini
                                }: DashboardAppbarInterface) => {
    const classes = useStyles();

    const toolbarClasses = openMenuMini ? classes.toolbarContent + " " + classes.toolbarMiniMenuContent : classes.toolbarContent;

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={toolbarClasses}>
                {/*Mobile menu*/}
                <Hidden mdUp>
                    <IconButton edge="start" className={classes.menuButton}
                                color="inherit" aria-label="menu"
                                onClick={handleMenuMobile}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
                {/*Desktop menu*/}
                <Hidden smDown>
                    <IconButton edge="start" className={classes.menuButton}
                                color="inherit" aria-label="menu"
                                onClick={handleMenuDesktop}
                    >
                        {
                            openMenuMini ? (
                                <MenuOpenIcon/>
                            ) : (
                                <MenuIcon/>
                            )
                        }
                    </IconButton>
                </Hidden>
                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
