import createAccountWithEmail from '../../../firebase-utils/auth/createAccount/createAccountWithEmail';

function CreateAccount({ onClick }){
    const handleSubmit = (e) => {
        e.preventDefault();
        createAccountWithEmail(e.target.email.value, e.target.password.value)
        // TODO: add username to user profile
    }

    return (
        <>
            <p id="back-button" onClick={() => onClick(false)}>← Back</p>
            <h1 id="email-header">Sign Up with Email</h1>
            <form onSubmit={handleSubmit} id="create-email-account">
                <div id="names">
                    <div className='input-container'>
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className='input-container'>
                    <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Create a username"
                            required
                        />
                    </div>
                </div>
                <div id="passwords">
                    <div className='input-container'>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Create a password"
                            required
                        />
                    </div>
                    <div className='input-container'>
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirm-password"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

// TODO: confim email format
// TODO: check passwords are matching

export default CreateAccount;