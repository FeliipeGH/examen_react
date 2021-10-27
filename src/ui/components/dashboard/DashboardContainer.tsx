import React, {useState} from 'react';
import {Box, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {dashboardStyles} from "./styles/dashboardStyles";
import {DashboardContainerInterface} from "./interfaces/DashboardContainerInterface";
import {useIsMounted} from "../../hooks/useIsMounted";
import {DashboardAppbar} from "../dashboardAppbar/DashboardAppbar";
import {routeComponentNames} from "../../router/constants/routeComponentNames";
import {DashboardSidebar} from "../dashboardSidebar/DashboardSidebar";
import {DashboardFooter} from "./localComponents/DashboardFooter";

// @ts-ignore
const useStyles = makeStyles(dashboardStyles);
export const DashboardContainer = ({moduleList = [], children}: DashboardContainerInterface) => {
    const classes = useStyles();

    const isMounted = useIsMounted();

    const [openMenuMini, setOpenMenuMini] = useState(false);
    const [openMenuMobile, setOpenMenuMobile] = useState(false);

    const handleMiniActive = () => {
        if (isMounted) setOpenMenuMini(!openMenuMini);
    };

    const handleMenuMobile = () => {
        if (isMounted) setOpenMenuMobile(!openMenuMobile);
    };

    const mainContainerClass = openMenuMini ? classes.mainContainer + " " + classes.mainContainerMiniMenu
        : classes.mainContainer;

    return (
        <Box className={classes.wrapper}>
            <DashboardAppbar title={routeComponentNames[window.location.pathname] ?? ""}
                             openMenuMini={openMenuMini}
                             handleMenuDesktop={handleMiniActive}
                             handleMenuMobile={handleMenuMobile}
            />
            <DashboardSidebar open={openMenuMobile} handleOpen={handleMenuMobile} isOpenMenuMini={openMenuMini}
                              moduleList={moduleList}
            />
            <Box className={mainContainerClass}>
                <Box className={classes.container}>
                    <Box className={classes.content}>
                        {children}
                    </Box>
                </Box>
                <Box>
                    <Divider/>
                    <DashboardFooter/>
                </Box>
            </Box>
        </Box>
    );
};