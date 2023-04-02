import './login.css'
import NoProvider from './actionsBoxStates/NoProvider'
import { useState } from 'react'

function LoginContainer(){
    const [provider, setProvider] = useState(false);
    
    const handleProviderChange = (provider) => {
        setProvider(provider)
    }
    
    return (
        <div id="login-container">
            <div id="actions-container">
                {!provider && < NoProvider onClick={handleProviderChange} />}
                {provider && <p>{provider}</p>}
            </div>
        </div>
    )
}

export default LoginContainer