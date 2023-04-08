import { useRef, useState } from "react";
import emailIsInvalid from "../../../utils/validate/emailIsInvalid";
import sendPassResetEmail from "../../../firebase-utils/auth/sendPassResetEmail";

function ResetPassword({ backCallback }){
    const formRef = useRef(null);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [sendAgain, setSendAgain] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailIsInvalid(formRef.current))
            sendPassResetEmail(formRef.current.email.value, 
                () => {
                    setSendAgain(true)
                },
                (code) => {
                    if (code === 'auth/user-not-found') setInvalidEmail("Email not found! Go back and click the Sign Up button to create an account.")
                }
            )
    }
    
    return (
        <>
            <p id="back-button" onClick={() => backCallback('signin')}>← Back</p>
            <h1 id="email-header">Reset Password</h1>
            <form onSubmit={handleSubmit} ref={formRef} id="signin-actionsbox" className="forgot-pass" onBlur={() => setInvalidEmail(emailIsInvalid(formRef.current))} >
                <div className='input-container'>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <p id="error-text">{invalidEmail}</p>
                <input type="submit" value="Submit" />
                {sendAgain && <p id="forgot-pass" onClick={handleSubmit}>Send again</p>}
            </form>
        </>
    )
}

export default ResetPassword;