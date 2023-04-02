import signOutClient from "../../firebase-utils/auth/signOutClient"

function SignOut(){
    return (
        <button onClick={signOutClient}>Sign Out</button>
    )
}

export default SignOut