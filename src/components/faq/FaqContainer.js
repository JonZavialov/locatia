import CopyrightFooter from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import CategorySelector from "./CategorySelector";
import './faq-container.css'
import { useState } from "react";

function FaqContainer(){
    const [selectedCategory, setSelectedCategory] = useState("General Questions")
    
    return(
        <>
            <NavBar />
            <div id="faq-container">
                <h1>Frequently Asked Questions</h1>
                <p>Can't find your answer? Email locatia.recruitment@gmail.com for more help!</p>
                <div id="category-selector">
                    <CategorySelector name="General Questions" setCategory={setSelectedCategory} currCategory={selectedCategory}/>
                    <CategorySelector name="Companion Questions" setCategory={setSelectedCategory} currCategory={selectedCategory}/>
                    <CategorySelector name="Buyer Questions" setCategory={setSelectedCategory} currCategory={selectedCategory}/>
                </div>
            </div>
            <CopyrightFooter />
        </>
    )
}

export default FaqContainer;