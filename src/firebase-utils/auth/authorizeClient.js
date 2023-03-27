import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../initApp';
import signedIn from "../../utils/signedIn";

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
      // TODO: handle error
    });
}

export default authorizeClient;