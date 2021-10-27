import React, {useState} from 'react';
import {CardContainer} from "../../components/cardContainer/CardContainer";
import ImageIcon from "@material-ui/icons/Image";
import {Box, Grid} from "@material-ui/core";
import {GalleryImage, GalleryViewer} from "../../components/Gallery/GalleryViwer";
import {makeStyles} from "@material-ui/core/styles";
import {uploadStyles} from "./styles/uploadStyles";
import {MaterialButton} from "../../components/buttons/MaterialButton";
import {useIsMounted} from "../../hooks/useIsMounted";
import {ImageListContainer} from "./localComponents/ImageListContainer";
import "./styles/galleryStyles.css";

// @ts-ignore
const useStyles = makeStyles(uploadStyles);

export const UploadPage = () => {
    const classes = useStyles();
    const isMounted = useIsMounted();
    const [imageList, setImageList] = useState<Array<GalleryImage>>([]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    const updateList = (images: Array<GalleryImage>) => {
        if (isMounted.current) setImageList([...images]);
    };

    return (
        <Box marginBottom="2rem">
            <CardContainer icon={ImageIcon} onClickIsLink={false} title="Subir imágenes" showButton={false}>
                <form onSubmit={handleSubmit}>
                    <Grid container className={classes.uploadContainer} alignItems="stretch" spacing={4}>
                        <Grid item xs={12} md={6}>
                            <ImageListContainer imageList={imageList} updateList={updateList}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <GalleryViewer images={imageList}/>
                        </Grid>
                    </Grid>
                    <MaterialButton title="Subir"/>
                </form>
            </CardContainer>
        </Box>
    );
};