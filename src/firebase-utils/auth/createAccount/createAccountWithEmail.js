import { createUserWithEmailAndPassword } from "firebase/auth";
import signedIn from "../../../utils/signedIn";
import { auth } from '../../initApp';
import postAccountUsername from "../../post/postAccountUsername";

function createAccountWithEmail(email,password,username){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        postAccountUsername(username, () => {
            signedIn(user)
        })
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // TODO: handle error
    });
}

export default createAccountWithEmail;
