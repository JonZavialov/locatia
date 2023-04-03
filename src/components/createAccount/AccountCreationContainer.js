import getCurrentUser from "../../utils/getCurrentUser"
import SelectPhotos from "./SelectPhotos";
import SocialsSelectorBox from "./SocialsSelectorBox";
import './createAccount.css'
import { useState } from "react";

function AccountCreationContainer(){
    // TODO: for now, users should not see this page unless they have not previously created an account
    // TODO: later we can use this same page for updating account info but some form options will be disabled
    // TODO: verify user socials are valid
    const [socials, updateSocials] = useState([]);

    const handleSocialSelectOnParent = (platform) => {
        if (socials.includes(platform)){
            updateSocials(socials.filter((social) => social !== platform));
        } else {
            updateSocials([...socials, platform]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: create/update database entry
    }
    
    return(
        <>
            <p id="welcome">Welcome {getCurrentUser()}!</p>
            <div id="create-account">
                <h1>Create your account</h1>
                <div id="info-container">
                    <form onSubmit={handleSubmit}>
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="full-name"
                            placeholder="Enter your full name"
                            required
                        />
                        <label>Birthday</label>
                        <div id="bday-input">
                            <input
                                type="text"
                                name="bmonth"
                                placeholder="MM"
                                required
                            />
                            <input
                                type="text"
                                name="bday"
                                placeholder="DD"
                                required
                            />
                            <input
                                type="text"
                                name="byear"
                                id="byear"
                                placeholder="YYYY"
                                required
                            />
                        </div>
                        <label>School</label>
                        <input
                            type="text"
                            name="school"
                            placeholder="Enter your school"
                            required
                        />
                        <label>Sport</label>
                        <input
                            type="text"
                            name="sport"
                            placeholder="Enter the sport you play"
                            required
                        />
                        <label>Select your socials</label>
                        < SocialsSelectorBox callback={handleSocialSelectOnParent} />
                        {
                            socials.includes('Instagram') &&
                            <>
                                <label>Instagram</label>
                                <input
                                    type="text"
                                    name="instagram"
                                    placeholder="Enter your Instagram username"
                                    required
                                />
                            </>
                        }
                        {
                            socials.includes('Tiktok') &&
                            <>
                                <label>Tiktok</label>
                                <input
                                    type="text"
                                    name="tiktok"
                                    placeholder="Enter your Tiktok username"
                                    required
                                />
                            </>
                        }
                    </form>
                    < SelectPhotos />
                </div>
            </div>
        </>
    )
}

export default AccountCreationContainer