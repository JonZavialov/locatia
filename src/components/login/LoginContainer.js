import LoginButton from './LoginButton'
import './login.css'

function LoginContainer(){
    return (
        <div id="login-container">
            <div id="actions-container">
                <h1>Create your account</h1>
                <p id="subtext">Start spending more time training and less time looking for brands.</p>
                <LoginButton provider="Google" />
                <LoginButton provider="Facebook" />
                <LoginButton provider="email" style={{backgroundColor: "#1989CF", color: "white"}}/>
                <div id="signin-container">
                    <p>Already have an account?</p>
                    <p id="signin-button">Sign in</p>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer