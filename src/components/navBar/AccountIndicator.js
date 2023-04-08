import getCurrentUser from "../../utils/getCurrentUser";
import signOutClient from "../../firebase-utils/auth/signOutClient";
import { useState, useEffect } from "react";

function AccountIndicator(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(getCurrentUser()) setIsLoggedIn(true);
    }, [])

    return(
        <div id="account-indicator">
            {isLoggedIn ? 
                <p>Logged in as {getCurrentUser().email}</p> 
                : 
                <p>Not logged in</p>
            }
            {isLoggedIn ? 
                <button onClick={signOutClient}>Log out</button> 
                : 
                <button onClick={() => {window.location.href='/login'}}>Log in</button>
            }
        </div>
    )
}

export default AccountIndicator;