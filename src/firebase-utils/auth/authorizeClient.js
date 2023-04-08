import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../initApp';
import signedIn from "../../utils/signedIn";
import createNotification from "../../utils/createNotification";

function authorizeClient(email, password){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      signedIn(user);
    })
    .catch(() => {
      createNotification('error', 'Error signing in! Please try again.')
    });
}

export default authorizeClient;