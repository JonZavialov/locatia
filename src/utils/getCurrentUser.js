import getDocumentCookie from "./getDocumentCookie"

function getCurrentUser(){
    const user = getDocumentCookie("loggedIn")
    if (user !== "false" && user !== "") return { email: user, uid: getDocumentCookie('uid') }
    else return null;
}

export default getCurrentUser