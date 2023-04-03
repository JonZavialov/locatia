import Modal from 'react-modal';
import ReactCrop from 'react-image-crop'
import { useState, useEffect } from 'react';
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

function PhotoEditModal({ src, modalIsOpen, modalIsClosed }){
    const [crop, setCrop] = useState({
        unit: '%',
        x: 25,
        y: 25,
        width: 50,
        height: 50,
    })

    useEffect(() => {
        console.log(crop)
    }, [crop])
    
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={modalIsClosed}
            style={modalStyles}
            contentLabel="Example Modal"
            id="photo-edit-modal"
        >
            <h1>Adjust your photo</h1>
            <ReactCrop crop={crop} onChange={(c) => setCrop(c)} aspect={1}>
                <img src={src} alt='crop' />
            </ReactCrop>
            <button onClick={modalIsClosed}>close</button>
        </Modal>
    )
}

export default PhotoEditModal