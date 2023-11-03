import { useRef, useState } from "react";
import createNotification from "../../utils/createNotification";
import AgeSlider from "./AgeSlider";

function ExpandedSearchForm({ isSearchFormExpanded }){
    const searchRef = useRef(null);
    const zipRef = useRef(null);
    const [gender, setGender] = useState(null)
    const [ageRange, setAgeRange] = useState([])

    function updateGender(selected){
        if (selected === gender) setGender(null)
        else setGender(selected)
    }

    return(
        <div id="search-form-expansion" className={isSearchFormExpanded ? "expanded" : ""}>
            <input type="text" ref ={searchRef} name="search" placeholder="Search a name" id="search-bar" className="search-input"/>
            <div id="filters">
                <div id="filters-header">
                    <i className="fa fa-sliders" aria-hidden="true" id="filters-button"></i>
                    <h2>Filters</h2>
                </div>
                <div className="range-slider">
                    <p>Age:</p>
                    <AgeSlider onChange={(range) => setAgeRange(range)} />
                </div>
                <div className="filters-row">
                    <input type="text" ref={zipRef} placeholder="Near zip code" className="search-input" maxLength={5}/>
                    <div id="gender-selector-search">
                        <p onClick={() => updateGender('male')} className={gender === 'male' ? 'selected' : ''}>Male</p>
                        <p onClick={() => updateGender('female')} className={gender === 'female' ? 'selected': ''}>Female</p>
                        <p onClick={() => updateGender('other')} className={gender === 'other' ? 'selected': ''}>Other</p>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                const zip = zipRef.current.value
                if(zip.length !== 5 && zip.length !== 0) {
                    createNotification('error', 'Zip code must be five digits!')
                    return
                }
                const searchFilters = new URLSearchParams({
                    zip,
                    ageRange,
                    gender,
                    name: searchRef.current.value,
                })
                window.location.href = `/search?${searchFilters.toString()}`
            }}>Go</button>
        </div>
    )
}

export default ExpandedSearchForm;