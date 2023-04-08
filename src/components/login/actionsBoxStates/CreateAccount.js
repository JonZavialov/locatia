import createAccountWithEmail from '../../../firebase-utils/auth/createAccount/createAccountWithEmail';
import { useState, useRef } from 'react';

function CreateAccount({ onClick }){
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidUsername, setInvalidUsername] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const formRef = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!passIsInvalid(formRef.current) && !usernameIsInvalid(formRef.current)){
            createAccountWithEmail(formRef.current.email.value, formRef.current.password.value, formRef.current.username.value, (code) => {
                if (code === 'auth/email-already-in-use') setInvalidEmail("Email already in use! Go back and click the Sign In button to log in.")
            })
        }
        // TODO: add username to user profile
        // TODO: make sure username doesn't already exist
        // TODO: add regex to username (no special characters, min length)
    }

    return (
        <>
            <p id="back-button" onClick={() => onClick(false)}>← Back</p>
            <h1 id="email-header">Sign Up with Email</h1>
            <form 
                onSubmit={handleSubmit} 
                onBlur={() => {
                    setInvalidPassword(passIsInvalid(formRef.current))
                    setInvalidUsername(usernameIsInvalid(formRef.current))
                    setInvalidEmail(emailIsInvalid(formRef.current))
                }} 
                ref={formRef}
            >
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
                <p id="error-text">{invalidPassword}</p>
                <p id="error-text">{invalidUsername}</p>
                <p id="error-text">{invalidEmail}</p>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

function passIsInvalid(ref){
    const password = ref.password.value;
    const confirmPassword = ref['confirm-password'].value;

    if (password.length < 6 && password.length > 0){
        return "Password must be at least 6 characters long!"
    }else if (password !== confirmPassword && confirmPassword.length > 0){
        return "Passwords don't match!"
    }
    return false
}

function usernameIsInvalid(ref){
    const userRegex = /^[a-zA-Z0-9]{1,30}$/

    if (ref.username.value.length < 1) return false
    if (!userRegex.test(ref.username.value)) return "Invalid username! Make sure there are no special characters."
    return false
}

function emailIsInvalid(ref){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (ref.email.value.length < 1) return false
    if (!emailRegex.test(ref.email.value)) return "Invalid email!"
    return false
}

export default CreateAccount;