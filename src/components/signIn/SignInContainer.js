import Login from "./Login"
import CreateAccount from "./CreateAccount"
import SignOut from "./SignOut"

function SignInContainer(){
    return(
        <>
            <Login />
            <CreateAccount />
            <SignOut />
        </>
    )
}

export default SignInContainer