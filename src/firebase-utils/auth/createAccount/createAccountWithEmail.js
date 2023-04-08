import { createUserWithEmailAndPassword } from "firebase/auth";
import signedIn from "../../../utils/signedIn";
import { auth } from '../../initApp';
import postAccountUsername from "../../post/postAccountUsername";

function createAccountWithEmail(email,password,username, rejectCallback){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        postAccountUsername(username, () => {
            signedIn(user)
        })
    })
    .catch((error) => {
        rejectCallback(error.code);
    });
}

export default createAccountWithEmail;
