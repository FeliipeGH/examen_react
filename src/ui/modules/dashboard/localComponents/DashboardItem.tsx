import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {dashboardItemStyle} from "../styles/dashboardItemStyle";
import {DashboardItemInterface} from "../interfaces/DashboardItemInterface";
import {Box, Card, Divider, Grid, Typography} from '@material-ui/core';
import {Link} from "react-router-dom";

// @ts-ignore
const useStyles = makeStyles(dashboardItemStyle);

export const DashboardItem = ({
                                  icon: Icon,
                                  title,
                                  url,
                                  subTitle,
                                  hint = "Gestionar",
                                  color = "primary"
                              }: DashboardItemInterface) => {
    const classes = useStyles();

    return (
        <Grid xs={12} sm={6} md={4} xl={3} item className={classes.gridContent}>
            <Link to={url}>
                <Box className={classes.content}>
                    <Box className={classes.cardIcon + " " + classes[color]}>
                        <Icon fontSize="large"/>
                    </Box>
                    <Card className={classes.cardContent}>
                        <Typography align="right" className={classes.hintTitle}>
                            {hint}
                        </Typography>
                        <Typography align="right" className={classes.title}>
                            {title}
                        </Typography>
                        <Box className={classes.footer}>
                            <Divider/>
                            <Box display="flex" alignItems="center" marginTop="0.4rem" marginBottom="0.25rem">
                                <Icon fontSize="small" className={classes.footerIcon}/>
                                &nbsp;
                                <Typography className={classes.footTitle}>
                                    {subTitle}
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </Link>
        </Grid>
    );
};