import './login.css'
import NoProvider from './actionsBoxStates/NoProvider'
import { useState } from 'react'
import CreateAccount from './actionsBoxStates/CreateAccount';

function LoginContainer(){
    const [provider, setProvider] = useState(false);
    
    const handleProviderChange = (provider) => {
        setProvider(provider)
    }
    
    return (
        <div id="login-container">
            <div id="actions-container">
                {!provider && < NoProvider onClick={handleProviderChange} />}
                {provider === "email" && < CreateAccount onClick={handleProviderChange} />}
            </div>
        </div>
    )
}

export default LoginContainer