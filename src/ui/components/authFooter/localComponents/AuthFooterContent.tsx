import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

import {Box, Grid, Typography} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import PlaceIcon from "@material-ui/icons/Place";
import {authFooterStyles} from "../styles/authFooterStyles";
import {DashboardFooter} from "../../dashboard/localComponents/DashboardFooter";

// @ts-ignore
const useStyles = makeStyles(authFooterStyles);
export const AuthFooterContent = () => {
    const classes = useStyles();

    return (
        <Box marginTop="2.5rem">
            <Box marginBottom="2rem">
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box className={classes.footerTitle}>
                            Acerca
                        </Box>
                        <Box marginTop="1.3rem" className={classes.fontSubtitle} component="p">
                            Desarrollador Full-Stack, con conocimiento de SpringBoot(Java) en el Back-End, React y
                            Flutter para el Front-End.
                            Experiencia en el diseño de bases de datos relacionales con MySQL y PostgreSQL
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="caption">
                            <Box className={classes.footerTitle}>
                                Redes sociales
                            </Box>
                        </Typography>
                        <Box className={classes.socialFeed} style={{
                            margin: "1rem 0",
                        }}>
                            <Box>
                                <a
                                    href="https://www.facebook.com/felipe.guadarramaherrera/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.socialMediaLink}
                                >
                                    <FacebookIcon/>&nbsp;Facebook
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="caption">
                            <Box className={classes.footerTitle}>
                                Ubicación
                            </Box>
                        </Typography>
                        <Box className={classes.socialFeed} style={{
                            margin: "1rem 0"
                        }}>
                            <Box className={classes.socialMedia}>
                                <PlaceIcon/>
                                <Box className={classes.footerBody}>
                                    Cuernavaca Morelos
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <DashboardFooter/>
        </Box>
    );
};
