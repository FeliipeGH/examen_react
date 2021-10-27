import React from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {galleryStyles} from "../styles/galleryStyles";
import ImageIcon from "@material-ui/icons/Image";

// @ts-ignore
const useStyles = makeStyles(galleryStyles);
export const GallerySkeleton = () => {
    const classes = useStyles();

    return (
        <Box className={classes.gallerySkeletonContainer}>
            <ImageIcon className={classes.imageIcon}/>
        </Box>
    );
};