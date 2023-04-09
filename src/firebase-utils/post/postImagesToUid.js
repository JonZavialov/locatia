import { ref, uploadBytes } from "firebase/storage";
import { storage, auth } from "../initApp";
import getBlobFromURL from "../../utils/getBlobFromURL";
import deleteExtraImages from "./deleteExtraImages";

function postImagesToUid(images){
    return new Promise((resolve) => {
        images.forEach((image, i) => {
            getBlobFromURL(image, (blob) => {
                const storageRef = ref(storage, `/users/${auth.currentUser.uid}/${i + 1}.png`);
                uploadBytes(storageRef, blob)
                .then(() => {
                    if (i === images.length - 1) {
                        deleteExtraImages(images.length)
                        .then(() => resolve())
                    }
                });
            })
        });
    })
}

export default postImagesToUid