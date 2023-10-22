function Question({title, answer}){
    return(
        <div className="question">
            <h3>{title}</h3>
            <p>{answer}</p>
        </div>
    )
}

export default Question;