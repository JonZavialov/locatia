import createNotification from "./createNotification";

function clickedContact(){
createNotification('error', "Error finding user! Try going to the chat tab and searching for this user.")
}

export default clickedContact;