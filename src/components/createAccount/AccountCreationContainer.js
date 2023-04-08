import postAccountInfo from "../../firebase-utils/post/postAccountInfo";
import getCurrentUser from "../../utils/getCurrentUser"
import SelectPhotos from "./SelectPhotos";
import SocialsSelectorBox from "./SocialsSelectorBox";
import './createAccount.css'
import { useState, useRef, useEffect } from "react";

function AccountCreationContainer(){
    // TODO: for now, users should not see this page unless they have not previously created an account
    // TODO: later we can use this same page for updating account info but some form options will be disabled
    // TODO: verify user socials are valid
    const [socials, updateSocials] = useState([]);
    const [validDate, updateValidDate] = useState(true);
    const [hasEmptyFields, updateHasEmptyFields] = useState(true);
    const [imageInserts, updateImageInserts] = useState([])
    const formRef = useRef(null)

    const handleSocialSelectOnParent = (platform) => {
        if (socials.includes(platform)) updateSocials(socials.filter((social) => social !== platform));
        else updateSocials([...socials, platform]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postAccountInfo(formRef.current, imageInserts)
    }

    useEffect(() => {
        updateHasEmptyFields(checkEmptyFields(formRef.current))
    }, [socials])
    
    return(
        <>
            <p id="welcome">Welcome {getCurrentUser()}!</p>
            <div id="create-account">
                <h1>Create your account</h1>
                <div id="info-container">
                    <form 
                        onSubmit={handleSubmit} 
                        onBlur={() => {
                            updateValidDate(validateDate(formRef.current))
                            updateHasEmptyFields(checkEmptyFields(formRef.current))
                        }} 
                        ref={formRef}
                    >
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="full-name"
                            maxLength={50}
                            placeholder="Enter your full name"
                            required
                        />
                        <label>Birthday</label>
                        <div id="bday-input">
                            <input
                                type="text"
                                name="bmonth"
                                placeholder="MM"
                                maxLength={2}
                                required
                            />
                            <input
                                type="text"
                                name="bday"
                                placeholder="DD"
                                maxLength={2}
                                required
                            />
                            <input
                                type="text"
                                name="byear"
                                id="byear"
                                placeholder="YYYY"
                                maxLength={4}
                                required
                            />
                            {!validDate && <p id="invalid-date">Invalid date!</p>}
                        </div>
                        <label>School</label>
                        <input
                            type="text"
                            name="school"
                            maxLength={50}
                            placeholder="Enter your school"
                            required
                        />
                        <label>Sport</label>
                        <input
                            type="text"
                            name="sport"
                            maxLength={30}
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
                                    maxLength={30}
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
                                    maxLength={24}
                                    placeholder="Enter your Tiktok username"
                                    required
                                />
                            </>
                        }
                    </form>
                    < SelectPhotos onAddImage={(src) => updateImageInserts(imageInserts.concat(src))} />
                </div>
                <button 
                    id="continue-button" 
                    disabled={!validDate || hasEmptyFields || imageInserts.length < 2} 
                    onClick={handleSubmit}
                >
                    Continue
                </button>
            </div>
        </>
    )
}

function validateDate(ref){
    const REGEX = {
        month: /\b(0?[1-9]|1[0-2])\b/,
        day: /\b(0?[1-9]|[1-2][0-9]|3[0-1])\b/,
        year: /^(19\d\d|20[0-9][0-9])$/
    }
    const formData = new FormData(ref)
    
    const month = formData.get('bmonth') && REGEX.month.test(formData.get('bmonth'))
    const day = formData.get('bday') && REGEX.day.test(formData.get('bday'))
    const year = formData.get('byear') && REGEX.year.test(formData.get('byear'))

    if ((month && day && year).length === 0) return true
    return month && day && year
}

function checkEmptyFields(ref){
    if(!ref) return true
    const formData = new FormData(ref)
    const fields = Array.from(formData.values())
    return fields.includes('')
}

// TODO: no spaces in usernames

export default AccountCreationContainer