import React from 'react';
import ImageGallery from 'react-image-gallery';
import {makeStyles} from "@material-ui/core/styles";
import {galleryStyles} from "../styles/galleryStyles";

const useStyles = makeStyles(galleryStyles);
export const CustomImageGallery = ({
                                       images, autoPlay = false, showBullets = false,
                                       showThumbnails = false
                                   }) => {
    const classes = useStyles();

    return (
        <ImageGallery
            items={[...images]}
            autoPlay={autoPlay}
            showBullets={showBullets}
            showPlayButton={false}
            showThumbnails={showThumbnails}
            showFullscreenButton={true}
            additionalClass={classes.imageGallery}
        />
    );
};
