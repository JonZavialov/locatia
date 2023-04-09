import authorizeClient from '../../../firebase-utils/auth/authorizeClient'
import setAuthPersistence from '../../../firebase-utils/auth/setAuthPersistence';

function SignIn({ backCallback }){
    const handleSubmit = (e) => {
        e.preventDefault();
        authorizeClient(e.target.email.value, e.target.password.value)
        setAuthPersistence(e.target['remember-me'].checked)
    }
    
    return(
        <>
            <p id="back-button" onClick={() => backCallback(false)}>← Back</p>
            <h1 id="email-header">Sign In with Email</h1>
            <form onSubmit={handleSubmit} id="signin-actionsbox">
                <div className='input-container'>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className='input-container' style={{marginTop: "20px"}}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div id="remember-box">
                    <input type="checkbox" name="remember-me" id="remember-me" />
                    <label htmlFor='remember-me'>Remember me</label>
                </div>
                <input type="submit" value="Submit" />
                <p id="forgot-pass" onClick={() => backCallback('forgot-pass')}>Forgot password?</p>
            </form>
        </>
    )
}

// TODO: allow user to login with email or username

export default SignIn