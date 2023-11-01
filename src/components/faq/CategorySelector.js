function CategorySelector({ name, setCategory, currCategory }){
    return (
        <p  
            onClick={() => setCategory(name)}
            className={currCategory === name ? "category-selector selected" : "category-selector"}
        >{name}</p>
    )
}

export default CategorySelector;