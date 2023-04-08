import { signOut } from "firebase/auth";
import { auth } from "../initApp";
import createNotification from "../../utils/createNotification";

function signOutClient(){
    signOut(auth).then(() => {
        window.location.href='/'
    }).catch(() => {
        createNotification('error', 'Error signing out');
    });
}

export default signOutClient;