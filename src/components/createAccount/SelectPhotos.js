import ImageInputBox from "./ImageInputBox";

function SelectPhotos({ onAddImage, previewImgDict }){    
    return (
        <div id="photo-selector-container">
            <label>Profile photos</label>
            <div id="photo-insert-grid">
                {
                    [1,2,3,4,5,6].map((i) => {
                        return (
                            <ImageInputBox key={i} index={i} onAddImage={(index, src) => onAddImage(index, src)} previewImg={previewImgDict[i]} />
                        )
                    })
                }
            </div>
            <p>Add at least two photos to continue</p>
        </div>
    )
}

export default SelectPhotos