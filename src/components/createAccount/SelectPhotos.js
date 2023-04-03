function SelectPhotos(){    
    return (
        <div id="photo-selector-container">
            <label>Profile photos</label>
            <div id="photo-insert-grid">
                {
                    [1,2,3,4,5,6].map((i) => {
                        return (
                            <label key={i} className="photo-insert-grid-item">
                                <input type="file"></input>
                                +
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SelectPhotos