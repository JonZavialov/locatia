import IndividualChatDisplay from "./IndividualChatDisplay"

function SearchResults({ results}){
    return (
        <div id="messages-search-results">
            {Object.keys(results).map((uuid) => {
                return (
                    <div className='chat-selector' key={uuid}>
                        <IndividualChatDisplay onClick={() => console.log('yes')} alternateUUID={uuid} />
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResults