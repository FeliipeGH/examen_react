import React from 'react';
import {CustomImageGallery} from "./CustomImageGallery";
import {GalleryImage} from "../GalleryViwer";


type GalleryContainerProps = {
    images: Array<GalleryImage>,
    autoPlay?: boolean,
    showBullets?: boolean,
    showThumbnails?: boolean,
};

export const GalleryContainer = ({
                                     images, autoPlay = false, showBullets = false,
                                     showThumbnails = false
                                 }: GalleryContainerProps) => {

    return (
        <CustomImageGallery images={images} autoPlay={autoPlay} showBullets={showBullets}
                            showThumbnails={showThumbnails}/>
    );
};

