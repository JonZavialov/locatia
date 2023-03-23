import signOutClient from "../../firebase-utils/signOutClient"

function SignOut(){
    return (
        <button onClick={signOutClient}>Sign Out</button>
    )
}

export default SignOut