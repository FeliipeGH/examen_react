import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {galleryStyles} from "./styles/galleryStyles";
import {Box} from "@material-ui/core";
import {GallerySkeleton} from "./localComponents/GallerySkeleton";
import {GalleryContainer} from "./localComponents/GalleryContainer";

// @ts-ignore
const useStyles = makeStyles(galleryStyles);

export type GalleryImage = {
    original: string,
    thumbnail: string,
    imageName: string,
};

type GalleryViewerProps = {
    images: Array<GalleryImage>
};

export const GalleryViewer = ({images}: GalleryViewerProps) => {
    const classes = useStyles();

    return (
        <Box className={classes.galleryContainer}>
            {
                images.length > 0 ? (
                    <GalleryContainer images={images} showThumbnails={true}/>
                ) : (
                    <GallerySkeleton/>
                )
            }
        </Box>
    );
};


