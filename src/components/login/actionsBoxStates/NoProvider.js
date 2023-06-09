import createAccountWithThirdParty from '../../../firebase-utils/auth/createAccount/createAccountWithThirdParty'
import LoginButton from '../LoginButton'

function NoProvider({ onClick }){
    return (
        <>
            <h1>Create your account</h1>
            <p id="subtext">Start spending more time training and less time looking for brands.</p>
            <LoginButton provider="Google" onClick={createAccountWithThirdParty} />
            <LoginButton provider="Facebook" onClick={createAccountWithThirdParty} />
            <LoginButton provider="email" style={{backgroundColor: "#1989CF", color: "white"}} onClick={onClick} altText="up" />
            <div id="signin-container">
                <p>Already have an account?</p>
                <p id="signin-p" onClick={() => onClick('signin')}>Sign in</p>
            </div>
        </>
    )
}

export default NoProvider