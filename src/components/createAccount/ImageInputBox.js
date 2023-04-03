import { useState, useEffect } from 'react';
import PhotoEditModal from './PhotoEditModal';

function ImageInputBox(){
    const [image, setImage] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [fileObj, setFileObj] = useState(null);

    useEffect(() => {
        if(image){
            setIsOpen(true);
        }
    }, [image])

    return (
        <label className="photo-insert-grid-item">
            <input type="file" accept="image/*" onChange={(e) => fileUploaded(e, (result) => {
                setImage(result)
                setFileObj(e.target.files[0])
            })}></input>
            {!image && '+'}
            <PhotoEditModal src={image} modalIsOpen={modalIsOpen} modalIsClosed={() => setIsOpen(false)} fileObj={fileObj} />
        </label>
    )
}

function fileUploaded(e, callback){
    var fr = new FileReader();
    fr.onload = () => callback(fr.result)
    fr.readAsDataURL(e.target.files[0]);
}

export default ImageInputBox