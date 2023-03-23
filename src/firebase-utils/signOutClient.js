import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();

function signOutClient(){
    signOut(auth).then(() => {
        console.log('signed out')
    }).catch((error) => {
        console.log('error signing out')
    });
}

export default signOutClient;