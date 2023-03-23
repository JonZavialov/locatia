import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import signedIn from "../utils/signedIn";
import app from './initApp';
const auth = getAuth(app);

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
    });
}

export default createAccount;
