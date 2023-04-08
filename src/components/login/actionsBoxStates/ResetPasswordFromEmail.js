import { useRef, useState } from "react";
import passIsInvalid from "../../../utils/validate/passIsInvalid";
import resetPassword from "../../../firebase-utils/auth/resetPassword";

function ResetPasswordFromEmail({ code }){
    const formRef = useRef(null);
    const [invalidPassword, setInvalidPassword] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!passIsInvalid(formRef.current)) resetPassword(formRef.current.password.value, code)
    }
    
    return (
        <>
            <h1 id="email-header">Reset Password</h1>
            <form onSubmit={handleSubmit} ref={formRef} className="forgot-pass" onBlur={() => setInvalidPassword(passIsInvalid(formRef.current))} >
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
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default ResetPasswordFromEmail