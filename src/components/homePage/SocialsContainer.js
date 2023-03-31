import SocialsBox from "./SocialsBox"
import "./profile-cards.css"

function SocialsContainer({socials}){
    return (
        <div className="socials-container">
            {Object.keys(socials).map((x, i) => (
                <SocialsBox key={i} platform={x} handle={socials[x]} display={'@' + socials[x]} />
            ))}
        </div>
    )
}

export default SocialsContainer