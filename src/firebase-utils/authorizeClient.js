import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './initApp';
import signedIn from "../utils/signedIn";
const auth = getAuth(app);

function authorizeClient(email, password){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      signedIn(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

export default authorizeClient;