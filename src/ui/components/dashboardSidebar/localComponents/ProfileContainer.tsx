import React from 'react';
import {sideElementStyles} from "../styles/sideElementStyles";
import {makeStyles} from "@material-ui/core/styles";
import {ProfileContainerInterface} from "../interfaces/ProfileContainerInterface";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {CollapseElement} from "../interfaces/CollapseElement";
import {List} from "@material-ui/core";
import {ModuleSideListItem} from "./ModuleSideListItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {useDispatch, useSelector} from "react-redux";

import {logOut} from "../../../../store/modules/login/loginActions";
import {RootState} from "../../../../store/mainStore";
import {removeUserDataFromLocalStorage} from "../../../helpers/checkAuth";
// @ts-ignore
const useStyles = makeStyles(sideElementStyles);
export const ProfileContainer = ({isOpenMini, isOpenTemporalMenu}: ProfileContainerInterface) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {userName} = useSelector((state: RootState) => state.loginReducer);

    const onLogOut = async () => {
        await removeUserDataFromLocalStorage();
        dispatch(logOut());
    };

    const collapseList: Array<CollapseElement> = [
        {
            title: "Cerrar sesión",
            icon: ExitToAppIcon,
            onClick: onLogOut,
        },
    ];

    return (
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
            <ModuleSideListItem title={userName ?? ""} isOpenMini={isOpenMini} icon={AccountCircleIcon}
                                isOpenTemporalMenu={isOpenTemporalMenu} collapseList={collapseList}/>
        </List>
    );
};