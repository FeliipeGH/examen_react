import React from 'react';
import {Box, Card, Dialog, DialogContent, DialogTitle, IconButton, makeStyles, Typography} from "@material-ui/core";
import {generalDialogsStyles} from "./styles/generalDialogsStyles";
import {GeneralDialogInterface} from "./interfaces/GeneralDialogInterface";
import {DialogTransition} from "./localComponents/DialogTransition";
import Close from "@material-ui/icons/Close";
import {useIsMounted} from "../../hooks/useIsMounted";

// @ts-ignore
const useStyles = makeStyles(generalDialogsStyles);
export const GeneralDialog = ({
                                  openDialog,
                                  setOpenDialog,
                                  isLargest = true,
                                  isSuperLargest = false,
                                  title,
                                  children,
                                  onClose,
                              }: GeneralDialogInterface) => {
    const classes = useStyles();
    const isMounted = useIsMounted();

    const handleCloseDialog = () => {
        if (isMounted.current) setOpenDialog(false);
        if (onClose) onClose();
    };

    return (
        <Dialog
            classes={{
                root: classes.modalRoot,
                paper: isSuperLargest ? classes.superLargestModal : isLargest ? classes.largestModal : classes.modal
            }}
            keepMounted
            onClose={handleCloseDialog}
            open={openDialog}
            // @ts-ignore
            TransitionComponent={DialogTransition}
            aria-labelledby="generalDialog"
            aria-describedby="generalDialogDesc"
        >
            <Card className={classes.modalCard}>
                <DialogTitle
                    id="dialogTitle"
                    disableTypography
                    className={classes.modalHeader}
                >
                    <Box className={classes.titleContainer}>
                        <Typography className={classes.modalTitle}>
                            {title}
                        </Typography>
                        <IconButton
                            onClick={handleCloseDialog}
                            className={classes.iconClose}
                        >
                            <Close/>
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent id="generalDialogContent" className={classes.modalBody}>
                    <Box marginTop="2rem">
                        {children}
                    </Box>
                </DialogContent>
            </Card>
        </Dialog>
    );
};