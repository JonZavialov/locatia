import {  ref, set } from "firebase/database";
import { db, auth } from "../initApp";

function postAvailability(availability){
    set(ref(db, 'availability/' + auth.currentUser.uid), availability)
    // TODO: handle error
}

export default postAvailability