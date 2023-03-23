import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './initApp';
const authenticator = getAuth(app);

function auth(email, password){
  signInWithEmailAndPassword(authenticator, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

export default auth;