import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {appBarLinksStyle} from "./styles/appBarLinksStyles";
import {List, ListItem} from "@material-ui/core";
import {RouteConstants} from "../../router/constants/RouteConstants";
import {Link, useLocation} from "react-router-dom";

// @ts-ignore
const useStyles = makeStyles(appBarLinksStyle);

export const AppBarLinks = () => {
    const classes = useStyles();
    const location = useLocation();

    const navLinkNoSelect = classes.navLink + " " + classes.navLinkHover;
    const navLinkSelect = classes.navLink + " " + classes.navLinkSelected;

    return (
        <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem}>
                <a href="https://github.com/FeliipeGH" target="_blank" rel="noopener noreferrer"
                   className={navLinkNoSelect}>
                    GitHub
                </a>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to={RouteConstants.LOGIN_PAGE}
                      className={location.pathname === RouteConstants.LOGIN_PAGE ? navLinkSelect : navLinkNoSelect}
                >
                    Acceder
                </Link>
            </ListItem>
        </List>
    );
};