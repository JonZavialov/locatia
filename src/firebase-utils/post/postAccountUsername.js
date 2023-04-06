import {  ref, set } from "firebase/database";
import { db, auth } from "../initApp";

function postAccountUsername(username, callback){
    set(ref(db, 'usernames/' + username), auth.currentUser.uid)
    .then(callback)
}

export default postAccountUsername