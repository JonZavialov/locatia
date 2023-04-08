import { useState, useEffect, useRef } from 'react';
import PhotoEditModal from './PhotoEditModal';

function ImageInputBox({ onAddImage, index }){
    const [image, setImage] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [fileObj, setFileObj] = useState(null);
    const [previewSrc, setPreviewSrc] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if(image){
            setIsOpen(true);
        }
    }, [image])

    return (
        <label className="photo-insert-grid-item">
            <input 
                type="file" 
                accept="image/*" 
                ref = {inputRef}
                onClick={() => {
                    inputRef.current.value = null
                }} 
                onChange={(e) => fileUploaded(e, (result) => {
                    setImage(result)
                    setFileObj(e.target.files[0])
                })}
            ></input>
            {!image && !previewSrc && '+'}
            {previewSrc && <img src={previewSrc} alt="preview" />}
            <PhotoEditModal 
                src={image} 
                modalIsOpen={modalIsOpen} 
                modalIsClosed={() => {
                    setIsOpen(false) 
                    setImage(null)
                }} 
                fileObj={fileObj} 
                onImageCroppedCallback={(src) => {
                    setPreviewSrc(src)
                    setImage('temp')
                    onAddImage(index, src)
                }} 
            />
        </label>
    )
}


// TODO: add support for heic files

function fileUploaded(e, callback){
    var fr = new FileReader();
    fr.onload = () => callback(fr.result)
    if(e.target.files[0]) fr.readAsDataURL(e.target.files[0]);
}

export default ImageInputBox