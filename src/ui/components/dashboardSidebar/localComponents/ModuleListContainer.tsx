import React from 'react';
import {ModuleListContainerInterface} from "../interfaces/ModuleListContainerInterface";
import {sideElementStyles} from "../styles/sideElementStyles";
import {makeStyles} from "@material-ui/core/styles";
import {List} from "@material-ui/core";
import {ModuleSideListItem} from "./ModuleSideListItem";

// @ts-ignore
const useStyles = makeStyles(sideElementStyles);
export const ModuleListContainer = ({moduleList, isOpenTemporalMenu, isOpenMini}: ModuleListContainerInterface) => {
    const classes = useStyles();
    return (
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
            {
                moduleList.map((element, index) => (
                    <ModuleSideListItem key={`side_module_${index}`} isOpenTemporalMenu={isOpenTemporalMenu}
                                        isOpenMini={isOpenMini} {...element}/>
                ))
            }
        </List>
    );
};