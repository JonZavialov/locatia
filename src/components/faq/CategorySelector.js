function CategorySelector({ name, setCategory, currCategory }){
    return (
        <p  
            onClick={() => setCategory(name)}
            className={currCategory === name ? "selected" : ""}
        >{name}</p>
    )
}

export default CategorySelector;