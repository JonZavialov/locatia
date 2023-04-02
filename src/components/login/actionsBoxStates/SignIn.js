import authorizeClient from '../../../firebase-utils/auth/authorizeClient'

function SignIn({ backCallback }){
    const handleSubmit = (e) => {
        e.preventDefault();
        authorizeClient(e.target.email.value, e.target.password.value)
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
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

// TODO: allow user to login with email or username

export default SignIn