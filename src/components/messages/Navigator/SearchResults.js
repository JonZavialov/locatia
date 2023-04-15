import createNewChat from "../../../firebase-utils/post/createNewChat"
import getCurrentUser from "../../../utils/getCurrentUser"
import IndividualChatDisplay from "./IndividualChatDisplay"

function SearchResults({ results, onSelect }){
    return (
        <div id="messages-search-results">
            {Object.keys(results).map((uuid) => {
                return (
                    <div className='chat-selector' key={uuid}>
                        <IndividualChatDisplay onClick={async(user) => {
                            const cid = await createNewChat(getCurrentUser().uid, uuid)
                            onSelect({
                                cid, user
                            })
                        }} alternateUUID={uuid} />
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResults