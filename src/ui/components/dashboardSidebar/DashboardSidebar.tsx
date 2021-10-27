import React, {useState} from 'react';
import {sidebarStyles} from "./styles/sidebarStyles";
import {makeStyles} from "@material-ui/core/styles";
import {useIsMounted} from "../../hooks/useIsMounted";
import {DashboardSidebarInterface} from "./interfaces/DashboardSidebarInterface";
import {Box, Divider, Drawer, Hidden} from '@material-ui/core';
import {HeaderSidebar} from "./localComponents/HeaderSidebar";
import {ProfileContainer} from "./localComponents/ProfileContainer";
import {ModuleListContainer} from "./localComponents/ModuleListContainer";
import logo from "../../../assets/img/main/logo.png";
import {UIConstants} from "../../constants/UiConstants";

// @ts-ignore
const useStyles = makeStyles(sidebarStyles);
export const DashboardSidebar = ({open, isOpenMenuMini, handleOpen, moduleList}: DashboardSidebarInterface) => {

    const classes = useStyles();
    const isMounted = useIsMounted();
    const [openTemporalMenu, setOpenTemporalMenu] = useState(true);

    const handleMouseHover = () => {
        if (isMounted.current && isOpenMenuMini) setOpenTemporalMenu(false);
    };

    const handleMouseOut = () => {
        if (isMounted.current && isOpenMenuMini) setOpenTemporalMenu(true);
    };

    const desktopMenuClasses = isOpenMenuMini && openTemporalMenu ? classes.drawer + " " + classes.drawerMini : classes.drawer;

    return (
        <Box>
            {/*Mobile Menu*/}
            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    open={open}
                    onClose={handleOpen}
                    classes={{
                        paper: classes.drawer
                    }}
                    ModalProps={{
                        keepMounted: true
                    }}
                >
                    <HeaderSidebar logo={logo} title={UIConstants.BUSINESS_NAME} isMini={isOpenMenuMini}
                                   isOpenTemporalMenu={openTemporalMenu}/>
                    <Divider/>
                    <ProfileContainer isOpenTemporalMenu={openTemporalMenu} isOpenMini={isOpenMenuMini}/>
                    <Divider/>
                    <ModuleListContainer moduleList={moduleList} isOpenTemporalMenu={openTemporalMenu}
                                         isOpenMini={isOpenMenuMini}/>
                </Drawer>
            </Hidden>
            {/*Desktop menu*/}
            <Hidden smDown>
                <Drawer
                    open
                    variant="permanent"
                    classes={{
                        paper: desktopMenuClasses
                    }}
                    onMouseOver={handleMouseHover}
                    onMouseOut={handleMouseOut}
                    elevation={3}
                >
                    <HeaderSidebar logo={logo} title={UIConstants.BUSINESS_NAME} isMini={isOpenMenuMini}
                                   isOpenTemporalMenu={openTemporalMenu}/>
                    <Divider/>
                    <ProfileContainer isOpenTemporalMenu={openTemporalMenu} isOpenMini={isOpenMenuMini}/>
                    <Divider/>
                    <ModuleListContainer moduleList={moduleList} isOpenTemporalMenu={openTemporalMenu}
                                         isOpenMini={isOpenMenuMini}/>
                </Drawer>
            </Hidden>
        </Box>
    );
};