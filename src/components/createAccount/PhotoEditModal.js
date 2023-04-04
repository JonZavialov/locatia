import Modal from 'react-modal';
import { useState, useRef } from 'react';
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'

Modal.setAppElement('#root');

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    border: '1px solid black'
  },
};

function PhotoEditModal({ src, fileObj, modalIsOpen, modalIsClosed, onImageCroppedCallback }){
    const [crop, setCrop] = useState()
    const imgRef = useRef(null)

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={modalIsClosed}
            shouldCloseOnOverlayClick={false}
            style={modalStyles}
            id="photo-edit-modal"
        >
            <h1>Adjust your photo</h1>
            <p>Drag your cursor on your image to crop it</p>
            <ReactCrop crop={crop} onChange={c => setCrop(c)} aspect={1}>
              <img src={src} alt="crop" ref={imgRef} />
            </ReactCrop>
            <div id="buttons-row">
              <button onClick={modalIsClosed}>Cancel</button>
              <button 
                onClick={async() => {
                  onImageCroppedCallback(await getCroppedImg(fileObj, imgRef.current, crop))
                  modalIsClosed()
                }} 
                disabled={!cropIsPresent(crop)}
              >
                Crop
              </button>
            </div>
        </Modal>
    )
}

function cropIsPresent(crop){
  return crop && crop.width > 50 && crop.height > 50
}

function getCroppedImg(image, imgRef, pixelCrop) {
  // Because the image the client uploads is usually scaled down by the CSS,
  // We have to accordingly scale the crop dimensions up
  // We do this by getting the proportion of the actual image width from its blob,
  // And the width of the displayed image from the React ref hook
  // This took me a ridiculous amount of time to figure out
  
  return new Promise((resolve) => {
    createImageBitmap(image).then((imageBitmap) => {
      getImgDimensions(image).then((dimensions) => {
        const cropScale = {
          x: dimensions.width / imgRef.clientWidth,
          y: dimensions.height / imgRef.clientHeight,
        }

        const canvas = document.createElement('canvas');
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
          imageBitmap,
          pixelCrop.x * cropScale.x,
          pixelCrop.y * cropScale.y,
          pixelCrop.width * cropScale.x,
          pixelCrop.height * cropScale.y,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height,
        );
      
        // As Base64 string
        resolve(canvas.toDataURL('image/png'));
      })
    })
  })
}

function getImgDimensions(blob){
  return new Promise((resolve) => {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(blob);
      img.onload = () => {
          resolve({width: img.width, height: img.height})
      }
  })
}

export default PhotoEditModal