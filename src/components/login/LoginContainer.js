import './login.css'
import NoProvider from './actionsBoxStates/NoProvider'
import { useEffect, useState } from 'react'
import CreateAccount from './actionsBoxStates/CreateAccount';
import SignIn from './actionsBoxStates/SignIn';
import ResetPassword from './actionsBoxStates/ResetPassword';
import ResetPasswordFromEmail from './actionsBoxStates/ResetPasswordFromEmail';

function LoginContainer(){
    const [provider, setProvider] = useState(false);
    const urlParams = new URLSearchParams(window.location.search);
    
    const handleProviderChange = (provider) => {
        setProvider(provider)
    }
    
    useEffect(() => {
        if (urlParams.get('mode') === 'reset') setProvider('reset-pass')
        else if (urlParams.get('mode') === 'signin') setProvider('signin')
    // TODO: fix 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id="login-container">
            <div id="actions-container">
                {!provider && < NoProvider onClick={handleProviderChange} />}
                {provider === "email" && < CreateAccount onClick={handleProviderChange} />}
                {provider === "signin" && <SignIn backCallback={handleProviderChange} />}
                {provider === "forgot-pass" && <ResetPassword backCallback={handleProviderChange} />}
                {provider === "reset-pass" && <ResetPasswordFromEmail code={urlParams.get('code')} />}
            </div>
        </div>
    )
}

export default LoginContainer