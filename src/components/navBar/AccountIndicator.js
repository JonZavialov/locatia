import getCurrentUser from "../../utils/getCurrentUser";
import signOutClient from "../../firebase-utils/auth/signOutClient";
import { useNavigate } from "react-router";

function AccountIndicator(){
    const isLoggedIn = getCurrentUser() !== null;
    // get user profile image
    const imgURL = "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let navigate = useNavigate()
    return(
        <div id="account-indicator">
                {/*url should pass uuid as argument */}
                <img id="profile-img" src={imgURL} onClick={()=>navigate("/editProfile")}/>
            {/* {isLoggedIn && <p>{getCurrentUser().email}</p>} */}
            {/* TODO: make this username instead */}
            {isLoggedIn ? 
                <button onClick={signOutClient}>Log out</button> 
                : 
                <button onClick={() => {window.location.href='/login?mode=signin'}}>Log in</button>
            }
        </div>
    )
}

export default AccountIndicator;