import {  ref, set } from "firebase/database";
import { db, auth } from "../initApp";
import postImagesToUid from "./postImagesToUid";

function postAccountInfo(formRef, picsData){
    const formData = new FormData(formRef)
    const submitData = {
        bio: "This user has not set their bio yet",
        birthday: `${formData.get("byear")}-${formatDate(formData.get("bmonth"))}-${formatDate(formData.get("bday"))}`,
        name: formData.get("full-name"),
        school: formData.get("school"),
        socials: {
            instagram: formData.get("instagram") || false,
            tiktok: formData.get("tiktok") || false,
        },
        sport: formData.get("sport"),
        username: "test"
    }

    // TODO: add username

    set(ref(db, auth.currentUser.uid + '/'), submitData);
    postImagesToUid(picsData)

    // TODO: handle error
}

function formatDate(date){
    if (date.length === 1) return '0' + date
    return date
}

export default postAccountInfo