import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../initApp";

function createAccountWithThirdParty(provider){
    if(provider === 'Google') provider = new GoogleAuthProvider();
    if(provider === 'Facebook') provider = new FacebookAuthProvider();
    
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result.user)
    }).catch((error) => {
        console.log(error)
        // TODO: handle error
    });    
}

export default createAccountWithThirdParty;