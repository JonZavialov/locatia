import { useState } from "react";

function Question({title, answer}){
    const [isExpanded, setIsExpanded] = useState(false)
    
    return(
        <div className="question-container">
            <div className="question" onClick={() => setIsExpanded(!isExpanded)}>
                <h3>{title}</h3>
                <i 
                    className={`fa fa-${isExpanded ? 'minus' : 'plus'}`} 
                    aria-hidden="true"
                ></i>
            </div>
            <p style={{display: isExpanded ? "" : "none"}}>{answer}</p>
        </div>
    )
}

export default Question;