import React from 'react';
import {GalleryImage} from "../../../components/Gallery/GalleryViwer";
import {Box, Card, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {closeAlert, showGenericAlert, showLoadingAlert} from "../../../components/alerts/Alerts";

type ImageListContainerProps = {
    imageList: Array<GalleryImage>,
    updateList: (imageList: Array<GalleryImage>) => void,
};

type ImageContainerProps = {
    image: GalleryImage,
    onDelete: () => void,
    index: number,
}


export const ImageListContainer = ({imageList, updateList}: ImageListContainerProps) => {

    const handleDelete = (index: number) => {
        let newImageList = [...imageList];
        newImageList.splice(index, 1);
        updateList(newImageList);
    };

    const handleAddImages = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        showLoadingAlert();
        const fileList = event.dataTransfer.files;
        let auxList: Array<GalleryImage> = [];
        let flag = true;
        if (fileList.length > 0) {
            for (let i = 0; i < fileList.length; i++) {
                // png, jpeg, jpg
                if (!(/\.(jpe?g|jpg|png)$/i).test(fileList[i].name)) {
                    flag = false;
                } else {
                    auxList.push(await handleAddImage(fileList[i]));
                }
            }
            if (auxList.length > 0) {
                updateList([...imageList, ...auxList]);
            }
            closeAlert();
            if (!flag) {
                showGenericAlert("¡Las imágenes que no cumplen con el formato no fueron agregadas!",
                    "Alerta", "warning")
                    .then();
            }
        }
    };

    const handleAddImage = (file: File) => {
        return new Promise<GalleryImage>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const {result} = reader;
                const obj = {
                    imageName: file.name,
                    original: result,
                    thumbnail: result,
                } as GalleryImage;
                resolve(obj);
            };
            reader.readAsDataURL(file);
        });
    };

    return (
        <Card variant="outlined">
            <Box padding="1rem"
                 onDragOver={e => e.preventDefault()}
                 onDragEnter={e => e.preventDefault()}
                 onDragLeave={e => e.preventDefault()}
                 onDrop={handleAddImages}
                 height="100%"
                 minHeight="50vh"
                 maxHeight="55vh"
                 overflow="auto"
            >
                <Box marginBottom="1rem">
                    <Typography variant="h6">Arrastra las imágenes aquí</Typography>
                    <Typography variant="body1">Formatos permitidos: <strong>png, jpeg, jpg</strong></Typography>
                </Box>
                {
                    imageList.length > 0 && (
                        <Box>
                            {
                                imageList.map((image: GalleryImage, index) => (
                                    <ImageContainer key={`image_${index}`} image={image} index={index}
                                                    onDelete={() => handleDelete(index)}/>
                                ))
                            }
                        </Box>
                    )
                }
            </Box>
        </Card>
    );
};

const ImageContainer = ({image, onDelete, index}: ImageContainerProps) => {
    const {imageName} = image;

    return (
        <Box marginY="1rem">
            <Card variant="outlined">
                <Box padding="1rem">
                    <ListItem ContainerComponent="div">
                        <Typography>{(index + 1 + ".-")}</Typography>&nbsp;
                        <ListItemText>
                            <Box maxWidth="90%">
                                <Typography>{imageName}</Typography>
                            </Box>
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments" onClick={onDelete}>
                                <DeleteIcon color="secondary"/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Box>
            </Card>
        </Box>
    )
};