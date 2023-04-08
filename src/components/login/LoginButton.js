import { useEffect, useState } from 'react'
import getImageFromStorage from '../../firebase-utils/query/getImageFromStorage'
import './login.css'

const images = {
    'Google': '/assets/google.png',
    'Facebook': '/assets/facebook.png',
}

function LoginButton({ provider, onClick, style, altText }){
    const [uri, setUri] = useState('')
    
    useEffect(() => {
        const asd = async () => {
            if (!images[provider]) setUri('')
            else {
                const response = await getImageFromStorage(images[provider])
                setUri(response);
            }
        };
        asd()
    }, [provider])
    
    return (
        <button onClick={() => onClick(provider)} style={style} id="signin-button">
            {uri && <img src={uri} alt={provider} />}
            <p>Sign {!altText ? "in" : altText} with {provider}</p>
        </button>
    )
}

export default LoginButton