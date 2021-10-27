import React from 'react';
import {Box, Button, Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {cardContainerStyles} from "./styles/CardContainerStyles";
import {CardContainerInterface} from "./interfaces/CardContainerInterface";
import {Link} from "react-router-dom";

// @ts-ignore
const useStyles = makeStyles(cardContainerStyles);
export const CardContainer = ({
                                  icon: Icon,
                                  title = "Lista de elementos",
                                  showButton = true,
                                  children,
                                  color = "primary",
                                  onClick,
                                  onClickFunc,
                                  onClickIsLink = true,
                              }: CardContainerInterface) => {
    const classes = useStyles();

    return (
        <Box className={classes.cardContainer}>
            <Box className={classes.cardIcon + " " + classes[color]}>
                <Icon fontSize="medium"/>
            </Box>
            <Card className={classes.cardContent}>
                <Box className={classes.titleContent}>
                    <Box component="p" className={classes.title}>
                        {title}
                    </Box>
                    {
                        showButton && onClickIsLink && (
                            <Button color="primary" variant="contained" className={classes.button}
                                    component={Link} to={onClick ?? ""}
                            >
                                Agregar
                            </Button>
                        )
                    }
                    {
                        showButton && !onClickIsLink && onClickFunc && (
                            <Button color="primary" variant="contained" className={classes.button}
                                    onClick={onClickFunc}
                            >
                                Agregar
                            </Button>
                        )
                    }
                </Box>
                <Box className={classes.content}>
                    {children}
                </Box>
            </Card>
        </Box>
    );
};