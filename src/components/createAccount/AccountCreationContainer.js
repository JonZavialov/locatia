import postAccountInfo from "../../firebase-utils/post/postAccountInfo";
import getCurrentUser from "../../utils/getCurrentUser"
import SelectPhotos from "./SelectPhotos";
import SocialsSelectorBox from "./SocialsSelectorBox";
import './createAccount.css'
import { useState, useRef, useEffect } from "react";
import detectProfanity from "../../utils/validate/detectProfanity";
import createNotification from "../../utils/createNotification";
import getProfileFromUUID from "../../firebase-utils/query/getProfileFromUUID";
import getImageListFromUUID from "../../firebase-utils/query/getImageListFromUUID";
import getImageFromRef from "../../firebase-utils/query/getImageFromRef";

function AccountCreationContainer(){
    // TODO: for now, users should not see this page unless they have not previously created an account
    // TODO: later we can use this same page for updating account info but some form options will be disabled
    // TODO: verify user socials are valid
    const [socials, updateSocials] = useState([]);
    const [validDate, updateValidDate] = useState(true);
    const [hasEmptyFields, updateHasEmptyFields] = useState(true);
    const [invalidUsers, updateInvalidUsers] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
    const formRef = useRef(null)
    const [imageInserts, updateImageInserts] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null
    })

    const handleSocialSelectOnParent = (platform) => {
        if (socials.includes(platform)) updateSocials(socials.filter((social) => social !== platform));
        else updateSocials([...socials, platform]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        detectProfanity(formRef.current)
        .then((hasProfanity) => {
            if (hasProfanity) createNotification('error', `We detected profanity in your account info. Please remove it and try again.`)
            else postAccountInfo(formRef.current, imageInserts)
        })
    }

    useEffect(() => {
        updateHasEmptyFields(checkEmptyFields(formRef.current))
    }, [socials])

    useEffect(() => {
        const asd = async() => {
            const userInfo = getCurrentUser()

            if (!userInfo) window.location.href = '/login'
            else {
                const profileInfo = await getProfileFromUUID(userInfo.uid)
                if (profileInfo.profile && urlParams.get('mode') !== 'edit') window.location.href = '/home'
            }
        }
        asd()
    // TODO: fix
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (urlParams.get('mode') === 'edit') {
            const asd = async() => {
                const userInfo = getCurrentUser()
                const profileInfo = await getProfileFromUUID(userInfo.uid)
                const profile = profileInfo.profile
                const form = formRef.current

                if(!profile) window.location.href = '/create-account'

                // add profile info
                form['full-name'].value = profile.name
                form['school'].value = profile.school
                form['sport'].value = profile.sport
                form['bio'].value = profile.bio

                // add birthday
                const birthday = profile.birthday.split('-')
                form['bmonth'].value = birthday[1]
                form['bday'].value = birthday[2]
                form['byear'].value = birthday[0]
                
                // show social media slots
                const socialMediaKeys = Object.keys(profile.socials).filter((key) => profile.socials[key]);
                const capitalizedStrList = socialMediaKeys.map(str => str.charAt(0).toUpperCase() + str.slice(1));
                updateSocials(capitalizedStrList)

                // add social media handles
                socialMediaKeys.forEach((key) => {
                    setTimeout(() => {
                        form[key].value = profile.socials[key]
                    }, 100)
                })

                const images = await getImageListFromUUID(userInfo.uid) // list of refs
                images.forEach((image, index) => {
                    getImageFromRef(image)
                    .then((src) => {
                        updateImageInserts((prev) => {
                            return {
                                ...prev,
                                [index + 1]: src
                            }
                        })
                    })
                })
            }
            asd()
        }
    // TODO: fix
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
            {getCurrentUser() && <p id="welcome">Welcome {getCurrentUser().email}!</p>}
            <div id="create-account">
                <h1>{urlParams.get('mode') === 'edit' ? 'Edit' : 'Create'} your account</h1>
                <div id="info-container">
                    <form 
                        onSubmit={handleSubmit} 
                        onChange={() => {
                            updateValidDate(validateDate(formRef.current))
                            updateHasEmptyFields(checkEmptyFields(formRef.current))
                            
                            getInvalidSocials(formRef.current, socials)
                            .then((invalidUsers) => {
                                updateInvalidUsers(invalidUsers)
                            })
                        }}
                        onMouseMove={() => {
                            updateValidDate(validateDate(formRef.current))
                            updateHasEmptyFields(checkEmptyFields(formRef.current))
                            
                            getInvalidSocials(formRef.current, socials)
                            .then((invalidUsers) => {
                                updateInvalidUsers(invalidUsers)
                            })
                        }}
                        id='create-account-form'
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
                                disabled = {urlParams.get('mode') === 'edit'}
                                required
                            />
                            <input
                                type="text"
                                name="bday"
                                placeholder="DD"
                                maxLength={2}
                                disabled = {urlParams.get('mode') === 'edit'}
                                required
                            />
                            <input
                                type="text"
                                name="byear"
                                id="byear"
                                placeholder="YYYY"
                                maxLength={4}
                                disabled = {urlParams.get('mode') === 'edit'}
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
                        < SocialsSelectorBox callback={handleSocialSelectOnParent} selected={socials} />
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
                                {invalidUsers.includes('instagram') && <p id="invalid-date">Invalid username!</p>}
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
                                {invalidUsers.includes('tiktok') && <p id="invalid-date">Invalid username!</p>}
                            </>
                        }
                        {
                            socials.includes('Twitter') &&
                            <>
                                <label>Twitter</label>
                                <input
                                    type="text"
                                    name="twitter"
                                    maxLength={15}
                                    placeholder="Enter your Twitter username"
                                    required
                                />
                                {invalidUsers.includes('twitter') && <p id="invalid-date">Invalid username!</p>}
                            </>
                        }
                    </form>
                    <div id="right-box">
                        < SelectPhotos 
                            onAddImage={(index, src) => {
                                const updatedInserts = {...imageInserts, [index]: src}
                                updateImageInserts(updatedInserts)
                            }}
                            previewImgDict={imageInserts}
                        />
                        <label>Bio</label>
                        <textarea 
                            placeholder="Write a little about yourself"
                            onBlur={() => {
                                updateValidDate(validateDate(formRef.current))
                                updateHasEmptyFields(checkEmptyFields(formRef.current))
                            }} 
                            name="bio"
                            form='create-account-form'
                        />
                    </div>
                </div>
                <button 
                    id="continue-button" 
                    disabled={!validDate || hasEmptyFields || Object.values(imageInserts).filter(value => value !== null).length < 2 || invalidUsers.length > 0} 
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
    const formData = new FormData()

    for (const input of ref.querySelectorAll('input, select, textarea')) {
        formData.append(input.name, input.value);
    }
        
    const month = formData.get('bmonth') && REGEX.month.test(formData.get('bmonth'))
    const day = formData.get('bday') && REGEX.day.test(formData.get('bday'))
    const year = formData.get('byear') && REGEX.year.test(formData.get('byear'))

    if ((month && day && year).length === 0) return true
    return month && day && year
}

function getInvalidSocials(ref, socials){
    return new Promise((resolve) => {
        const formData = new FormData(ref)
        const invalidSocials = []

        socials.forEach((social, i) => {
            const username = formData.get(social.toLowerCase())
            if(username.includes(' ')) invalidSocials.push(social.toLowerCase())
            if (i === socials.length - 1) resolve(invalidSocials)
        })
    })
}

function checkEmptyFields(ref){
    if(!ref) return true
    const formData = new FormData(ref)
    const fields = Array.from(formData.values())
    return fields.includes('')
}

export default AccountCreationContainer