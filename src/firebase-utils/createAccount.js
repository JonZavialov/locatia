import { createUserWithEmailAndPassword } from "firebase/auth";
import signedIn from "../utils/signedIn";
import { auth } from './initApp';

function createAccount(email,password){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        signedIn(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // TODO: handle error
    });
}

export default createAccount;
