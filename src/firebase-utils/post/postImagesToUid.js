import { ref, uploadBytes } from "firebase/storage";
import { storage, auth } from "../initApp";
import getBlobFromURL from "../../utils/getBlobFromURL";

function postImagesToUid(images){
    images.forEach((image, i) => {
        getBlobFromURL(image, (blob) => {
            const storageRef = ref(storage, `/users/${auth.currentUser.uid}/${i + 1}.png`);
            uploadBytes(storageRef, blob).then((snapshot) => {
                console.log(snapshot);
            });
        })
    });
}

export default postImagesToUid