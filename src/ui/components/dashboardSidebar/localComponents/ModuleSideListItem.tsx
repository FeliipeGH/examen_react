import React, {useEffect, useState} from 'react';
import {sideElementStyles} from "../styles/sideElementStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useLocation} from "react-router-dom";
import {ModuleSideListItemInterface} from "../interfaces/ModuleSideListItemInterface";
import {useIsMounted} from "../../../hooks/useIsMounted";
import {checkIsCurrentUrl} from "../helpers/checkIsCurrentUrl";
import {ColorList} from "../../../theme/ColorList";
import {Box, Collapse, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {CollapseListItemInterface} from "../interfaces/CollapseListItemInterface";
import {ExpandMore} from "@material-ui/icons";

// @ts-ignore
const useStyles = makeStyles(sideElementStyles);
export const ModuleSideListItem = ({
                                       collapseList = [],
                                       icon: Icon,
                                       isOpenTemporalMenu,
                                       isOpenMini,
                                       url = null,
                                       title
                                   }: ModuleSideListItemInterface) => {
    const classes = useStyles();
    const location = useLocation();

    const isMounted = useIsMounted();
    const [openCollapse, setOpenCollapse] = useState(checkIsCurrentUrl(collapseList));

    const handleClick = () => {
        if (isMounted) setOpenCollapse(!openCollapse);
    };
    const contentClass = isOpenMini && isOpenTemporalMenu ? classes.hideContent : "";

    const styleOfSelectedStatus = location.pathname === url ? {
        backgroundColor: ColorList.primaryMain,
        color: "#fff",
        boxShadow: '0 4px 6px -6px black',
    } : {
        color: "#616B77",
    };

    const onInit = () => {
        if (checkIsCurrentUrl(collapseList)) {
            if (isMounted.current) {
                setOpenCollapse(true);
            }
        } else if (isMounted.current) {
            setOpenCollapse(false);
        }
    };

    // eslint-disable-next-line
    useEffect(onInit, [isMounted, location.pathname]);

    const getListItemContent = (): JSX.Element => {
        return (
            <>
                <ListItemIcon key="">
                    <Icon fontSize="large" style={styleOfSelectedStatus}/>
                </ListItemIcon>
                <ListItemText primary={title} className={contentClass + " " + classes.contentList}/>
                <>
                    {
                        collapseList.length > 0 && (
                            <>
                                <ExpandMore
                                    className={(openCollapse ? classes.iconExpandMore : classes.iconExpandLess) + " " + contentClass}/>
                            </>
                        )
                    }
                </>
            </>
        );
    }

    return (
        <Box className={classes.container} borderRadius="3px" style={styleOfSelectedStatus}>
            {
                url !== null ? (
                    <ListItem button onClick={collapseList.length > 0 ? handleClick : undefined}
                              className={classes.nested}
                              component={Link} to={url}
                    >
                        {getListItemContent()}
                    </ListItem>
                ) : (
                    <ListItem button onClick={collapseList.length > 0 ? handleClick : undefined}
                              className={classes.nested}
                    >
                        {getListItemContent()}
                    </ListItem>
                )
            }
            {
                collapseList.length > 0 && (
                    <Collapse in={openCollapse}>
                        <List component="div" disablePadding className={classes.contentList}>
                            {
                                collapseList.map((element, index) => {
                                    const {icon, title: titleElement, url: urlElement, onClick} = element;
                                    return (
                                        <CollapseListItem key={`collapse_item_${index}_from_${title}`}
                                                          classes={classes} contentClass={contentClass}
                                                          icon={icon} title={titleElement} url={urlElement}
                                                          onClick={onClick}
                                        />
                                    )
                                })
                            }
                        </List>
                    </Collapse>
                )
            }
        </Box>
    );
};

const CollapseListItem = ({
                              classes,
                              contentClass,
                              icon: Icon,
                              title,
                              url = null,
                              onClick = null
                          }: CollapseListItemInterface) => {

    const styleOfSelectedStatus = window.location.pathname === url ? {
        backgroundColor: ColorList.primaryMain,
        color: "#fff",
    } : {
        color: "#616B77",
    };

    const getListItemContent = (): JSX.Element => {
        return (
            <>
                <ListItemIcon>
                    <Icon style={styleOfSelectedStatus} fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary={title} className={contentClass}/>
            </>
        );
    };

    if (url === null && onClick !== null) {
        return (
            <Box style={styleOfSelectedStatus} borderRadius="3px" margin="0.35rem 0">
                <ListItem button className={classes.nestedCollapseItem + " " + classes.listItemContent}
                          onClick={onClick}
                >
                    {getListItemContent()}
                </ListItem>
            </Box>
        );
    }
    if (url === null) {
        throw new Error("url && onClick cannot be null both");
    }
    return (
        <Box style={styleOfSelectedStatus} borderRadius="3px" margin="0.35rem 0">
            <ListItem button className={classes.nestedCollapseItem + " " + classes.listItemContent}
                      onClick={onClick ?? undefined}
                      component={Link} to={url}
            >
                {getListItemContent()}
            </ListItem>
        </Box>
    );
};