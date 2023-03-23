import getDocumentCookie from "./getDocumentCookie"

function getCurrentUser(){
    const user = getDocumentCookie("loggedIn")
    if (user !== "false" && user !== "") return user
    else return null;
}

export default getCurrentUser