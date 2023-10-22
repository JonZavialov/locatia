import { useRef } from "react";
import createNotification from "../../utils/createNotification";
import AgeSlider from "./AgeSlider";

function ExpandedSearchForm({ isSearchFormExpanded }){
    const formRef = useRef(null);
    const zipRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formRef.current.search.value.length === 0) return
        window.location.href = '/home?search=' + formRef.current.search.value;
    }

    return(
        <div id="search-form-expansion" className={isSearchFormExpanded ? "expanded" : ""}>
            <form onSubmit={handleSubmit} ref={formRef}>
                <input type="text" name="search" placeholder="Search a name" id="search-bar" className="search-input"/>
            </form>
            <div id="filters">
                <div id="filters-header">
                    <i className="fa fa-sliders" aria-hidden="true" id="filters-button"></i>
                    <h2>Filters</h2>
                </div>
                <div className="range-slider">
                    <p>Age:</p>
                    <AgeSlider onChange={(range) => console.log(range)} />
                </div>
                <input type="text" ref={zipRef} placeholder="Near zip code" className="search-input" maxLength={5}/>
            </div>
            <button onClick={() => {
                if(zipRef.current.value.length !== 5) {
                    createNotification('error', 'Zip code must be five digits!')
                    return
                }
                window.location.href = '/home?zip=' + zipRef.current.value;
            }}>Go</button>
        </div>
    )
}

export default ExpandedSearchForm;