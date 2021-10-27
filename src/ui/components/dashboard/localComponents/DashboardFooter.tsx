import React from 'react';
import {Box, List, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {dashboardFooterStyles} from "../styles/footerStyles";

// @ts-ignore
const useStyles = makeStyles(dashboardFooterStyles);
export const DashboardFooter = () => {
    const classes = useStyles();
    return (
        <Box className={classes.content}>
            <Box className={classes.left}>
                <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                        <a
                            href="https://www.linkedin.com/in/felipe-guadarrama-herrera-1400131a8/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.socialMediaBottom}
                        >
                            Linkedin &nbsp;
                        </a>
                    </ListItem>
                </List>
            </Box>
            <div className={classes.right + " " + classes.copyRight}>
                Copyright &copy; {new Date().getFullYear()}. Hecho por{" "}
                <strong
                    className={classes.copyRightBy}
                >
                    Felipe Guadarrama Herrera
                </strong>
            </div>
        </Box>
    );
};