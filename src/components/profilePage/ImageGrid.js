import './profilePage.css'
import { Gallery } from 'react-grid-gallery'
import React from 'react';

function ImageGrid({ images }){
    const [imageData, updateImageData] = React.useState([]);
    
    React.useEffect(() => {
        const asd = async () => {
            updateImageData(await getImageProps(images));
        }
        asd();
    }, [images])

    // TODO: make the gallery lazy load with a preview image
    // TODO:  use a hash table to store every image in the database with its width and height in metadata
    return (
        <div id="image-grid">
            {(imageData.length !== 0) && <Gallery images={imageData} enableImageSelection={false} backdropClosesModal={true} />}
            {(imageData.length === 0) && <p>Loading...</p>}
        </div>
    )
}

function getImageProps(images){
    // TODO: make this grab width and height data from database instead of loading the images
    // this function should be deleted
    
    var imageData = [];

    return new Promise((resolve) => {
        images.forEach((x) => {
            const img = new Image();
            img.onload = function() {
                imageData.push({
                    src: x,
                    width: this.width,
                    height: this.height
                })
                if (imageData.length === images.length){
                    resolve(imageData)
                }
            }
            img.src = x
        })
    })
}

export default ImageGrid