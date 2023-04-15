import { useEffect, useRef, useState } from "react";
import getProfiles from "../../../firebase-utils/query/getProfiles";
import getSearchResults from "../../../utils/getSearchResults";
import SearchResults from "./SearchResults";

function MessageNavigatorSearch(){
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchInputRef = useRef();

    useEffect(() => {
        if(searchTerm === '') setSearchResults([]);
        else {
            const asd = async() => {
                const profiles = await getProfiles();
                setSearchResults(getSearchResults(searchTerm, profiles));
            }
            asd();
        }
    }, [searchTerm])
    
    const handleSubmit = () => {
        setSearchTerm(searchInputRef.current.value)
    }
    
    return (
        <>
            <div id="messages-search">
                <i className="fa fa-search" aria-hidden="true" onClick={handleSubmit} ></i>
                <input ref={searchInputRef} type="text" placeholder="Add people" onKeyDown={(e) => {
                        if(e.key === 'Enter') handleSubmit();
                    }
                } />
            </div>
            {(searchTerm !== '' && Object.keys(searchResults).length === 0) ? <p id="no-results">No results found!</p> : <SearchResults results={searchResults} />}
        </>
    )
}

export default MessageNavigatorSearch