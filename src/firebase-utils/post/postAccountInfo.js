import {  ref, set } from "firebase/database";
import { db, auth } from "../initApp";
import postImagesToUid from "./postImagesToUid";
import createNotification from "../../utils/createNotification";

function postAccountInfo(formRef, picsData){
    const formData = new FormData(formRef)
    
    for (const input of formRef.querySelectorAll('input, select, textarea')) {
        formData.append(input.name, input.value);
    }

    const submitData = {
        bio: formData.get("bio"),
        birthday: `${formData.get("byear")}-${formatDate(formData.get("bmonth"))}-${formatDate(formData.get("bday"))}`,
        name: formData.get("full-name"),
        school: formData.get("school"),
        socials: {
            instagram: formData.get("instagram") || false,
            tiktok: formData.get("tiktok") || false,
            twitter: formData.get("twitter") || false,
        },
        sport: formData.get("sport"),
        timestamp: Date.now(),
    }

    createNotification('success', 'Uploading images...')
    set(ref(db, 'accounts/' + auth.currentUser.uid + '/'), submitData)
    .then(() => {
        postImagesToUid(Object.values(picsData).filter(value => value !== null))
        .then(() => window.location.href = '/home')
        // TODO: make this async
    })
    // TODO: handle error
}

function formatDate(date){
    if (date.length === 1) return '0' + date
    return date
}

export default postAccountInfo