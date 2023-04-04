import ImageInputBox from "./ImageInputBox";

function SelectPhotos(){    
    return (
        <div id="photo-selector-container">
            <label>Profile photos</label>
            <div id="photo-insert-grid">
                {
                    [1,2,3,4,5,6].map((i) => {
                        return (
                            <ImageInputBox key={i} id={i} />
                        )
                    })
                }
            </div>
            <p>Add at least one photo to continue</p>
        </div>
    )
}

export default SelectPhotos