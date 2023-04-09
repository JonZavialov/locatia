import { setPersistence, browserSessionPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from "../initApp";

function setAuthPersistence(rememberMe){
    if (rememberMe) setPersistence(auth, browserLocalPersistence)
    else setPersistence(auth, browserSessionPersistence)
}

export default setAuthPersistence;