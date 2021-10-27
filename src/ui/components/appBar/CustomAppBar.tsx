import React from 'react';
import {AppBar, Box, Button, Container, Drawer, Hidden, IconButton, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {appBarStyle} from "./styles/appBarStyle";
import {CustomAppBarInterface} from "./interfaces/CustomAppBarInterface";
import {Link} from 'react-router-dom';
import {RouteConstants} from "../../router/constants/RouteConstants";
import {Close, Menu} from "@material-ui/icons";
import {useIsMounted} from "../../hooks/useIsMounted";

// @ts-ignore
const useStyles = makeStyles(appBarStyle);

export const CustomAppBar = ({logo, description, branding, links, useOffSet = false}: CustomAppBarInterface) => {
    const classes = useStyles();
    const isMounted = useIsMounted();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        if (isMounted.current) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Container>
                    <Toolbar className={classes.toolBarContainer}>
                        <Button component={Link} to={RouteConstants.MAIN_PAGE}>
                            <img src={logo} alt="logo" className={classes.imageContainer}/>
                            <Box className={classes.boxContent}>
                                <Box className={classes.branding}>
                                    {branding}
                                </Box>
                                <Box className={classes.subBrandinTitle}>
                                    {description}
                                </Box>
                            </Box>
                        </Button>
                        <Hidden smDown implementation="css">
                            <div className={classes.collapse}>{links}</div>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                            >
                                <Menu/>
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                    <Hidden mdUp implementation="js">
                        <Drawer
                            variant="temporary"
                            anchor={"right"}
                            open={mobileOpen}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            onClose={handleDrawerToggle}
                        >
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                                className={classes.closeButtonDrawer}
                            >
                                <Close/>
                            </IconButton>
                            <div className={classes.appResponsive}>{links}</div>
                        </Drawer>
                    </Hidden>
                </Container>
            </AppBar>
            {
                useOffSet && (
                    <div className={classes.offset}/>
                )
            }
        </>
    );
};