import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../initApp";
import createNotification from "../../utils/createNotification";

function sendPassResetEmail(email, callback, errorCallback){
    sendPasswordResetEmail(auth, email)
    .then(() => {
        callback();
        createNotification('success', 'Email sent! Please check your inbox.')
    })
    .catch((error) => {
        createNotification('error', 'Error sending email! Please try again.')
        errorCallback(error.code)
    });
}

export default sendPassResetEmail