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
import CopyrightFooter from "../Footer";
import UserTag from "./UserTag";
import Fuse from 'fuse.js'

function AccountCreationContainer(){
    // TODO: verify user socials are valid
    const [socials, updateSocials] = useState([]);
    const [tags, updateTags] = useState([]);
    const [validDate, updateValidDate] = useState(true);
    const [hasEmptyFields, updateHasEmptyFields] = useState(true);
    const [invalidUsers, updateInvalidUsers] = useState([]);
    const [tagSuggestions, updateTagSuggestions] = useState([]);
    const [filteredTagSuggestions, updateFilteredTagSuggestions] = useState([]);
    const [tagSearcher, updateTagSearcher] = useState(null);
    const urlParams = new URLSearchParams(window.location.search);
    const formRef = useRef(null)
    const inputTagsBox = useRef(null)
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
        if (e.type === "submit") return //ignore submits by pressing enter key
        detectProfanityFromForm(formRef.current)
        .then((hasProfanity) => {
            if (hasProfanity) createNotification('error', `We detected profanity in your account info. Please remove it and try again.`)
            else postAccountInfo(formRef.current, imageInserts, tags)
        })
    }

    useEffect(() => {
        updateHasEmptyFields(checkEmptyFields(formRef.current))
    }, [socials])

    useEffect(() => {
        fetch('/assets/tags.json')
        .then(response => response.json())
        .then(data => {
            updateTagSuggestions(data)
            updateFilteredTagSuggestions(data)
            updateTagSearcher(new Fuse(data, {threshold: 0.3}))
        })
    }, [])

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
                form['bio'].value = profile.bio

                // add birthday
                const birthday = profile.birthday.split('-')
                form['bmonth'].value = birthday[1]
                form['bday'].value = birthday[2]
                form['byear'].value = birthday[0]

                // add tags
                updateTags(profile.tags)
                
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
            <div id="create-account"
                onMouseMove={() => {
                    updateValidDate(validateDate(formRef.current))
                    updateHasEmptyFields(checkEmptyFields(formRef.current))
                    
                    getInvalidSocials(formRef.current, socials)
                    .then((invalidUsers) => {
                        updateInvalidUsers(invalidUsers)
                    })
                }}
            >
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

                        <label>Tags</label>
                        <p>These will help us connect you to the right person.</p>
                        <div style={{'display': 'flex'}}>
                            <input
                                type="text"
                                name="tags"
                                maxLength={20}
                                placeholder="Enter some tags"
                                required
                                ref={inputTagsBox}
                                onKeyDown={(e) => {
                                    addTag(e.code, inputTagsBox.current.value, tags, updateTags, inputTagsBox.current)
                                    if(e.code === 'Enter') updateFilteredTagSuggestions(tagSuggestions)
                                }}
                                onChange={() => {
                                    if (inputTagsBox.current.value.length === 0){
                                        updateFilteredTagSuggestions(tagSuggestions)
                                        return
                                    }
                                    updateFilteredTagSuggestions(tagSearcher.search(inputTagsBox.current.value).map((x) => x.item))
                                }}
                            />
                            <p id="submit-tag-button" onClick={() => {
                                addTag('button', inputTagsBox.current.value, tags, updateTags, inputTagsBox.current)
                                updateFilteredTagSuggestions(tagSuggestions)
                            }}>+</p>
                        </div>
                        {
                            tags.length > 0 &&
                            <div id="tags-box">
                                {
                                    tags.map((tag, index) => (
                                        <UserTag key={index} tag={tag} actionCallback={(tag) => removeTag(tag, tags, updateTags)} action="X" />
                                    ))
                                }
                            </div>
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
                <div id="tag-selection-box">
                    {
                        filteredTagSuggestions.filter((tag) => !tags.includes(tag)).map((tag, index) => (
                            <UserTag key={index} tag={tag} actionCallback={(tag) => {
                                addTag('button', tag, tags, updateTags)
                                updateFilteredTagSuggestions(tagSuggestions)
                            }} action="+" />
                        ))
                    }
                </div>
                <button 
                    id="continue-button" 
                    disabled={!validDate || hasEmptyFields || Object.values(imageInserts).filter(value => value !== null).length < 2 || invalidUsers.length > 0} 
                    onClick={handleSubmit}
                >
                    Continue
                </button>
            </div>
            <CopyrightFooter />
        </>
    )
}

function addTag(eventCode, value, tags, updateTags, inputTagsBox){
    if (eventCode !== "Enter" && eventCode !== 'button') return
    if(value.length === 0) return

    if (tags.includes(value)){
        createNotification('error', `Tag already included.`)
        return
    }

    if (detectProfanity(value)){
        createNotification('error', `We detected profanity. Please remove it and try again.`)
        return
    }

    if (inputTagsBox) inputTagsBox.value = ''
    updateTags([...tags, value])
}

function removeTag(tag, tags, updateTags){
    updateTags(tags.filter((t) => t !== tag))
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
    const fields = Array.from(formData.entries())
    
    const exclude = ['tags']
    const emptyFields = []
    fields.forEach((field) => {
        if (!exclude.includes(field[0]) && field[1].length === 0) emptyFields.push(field[0])
    })
    return emptyFields.length > 0
}

function detectProfanityFromForm(form){
    return new Promise((resolve) => {
        const inputs = form.querySelectorAll('input[type="text"]')

        inputs.forEach(input => {
            if (detectProfanity(input.value)) resolve(true)
        })
        resolve(false);
    }) 
}

export default AccountCreationContainer