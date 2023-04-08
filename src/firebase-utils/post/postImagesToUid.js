import { ref, uploadBytes } from "firebase/storage";
import { storage, auth } from "../initApp";
import getBlobFromURL from "../../utils/getBlobFromURL";

function postImagesToUid(images){
    return new Promise((resolve) => {
        images.forEach((image, i) => {
            getBlobFromURL(image, (blob) => {
                const storageRef = ref(storage, `/users/${auth.currentUser.uid}/${i + 1}.png`);
                uploadBytes(storageRef, blob)
                .then(() => {
                    if (i === images.length - 1) resolve()
                });
            })
        });
    })
}

export default postImagesToUid