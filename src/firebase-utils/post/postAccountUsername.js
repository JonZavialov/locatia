import {  ref, set } from "firebase/database";
import { db, auth } from "../initApp";

function postAccountUsername(username){
    set(ref(db, 'usernames/' + username), auth.currentUser.uid);
}

export default postAccountUsername