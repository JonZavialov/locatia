import CopyrightFooter from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import CategorySelector from "./CategorySelector";
import Question from "./Question";
import './faq-container.css'
import { useState, useEffect } from "react";

function FaqContainer(){
    const [selectedCategory, setSelectedCategory] = useState("General Questions")
    const [faqInfo, setFaqInfo] = useState({});
    
    useEffect(() => {
        fetch('/assets/faq.json')
        .then(response => response.json())
        .then(data => {
            setFaqInfo(data);
        })
    }, [])

    return(
        <>
            <NavBar />
            <div id="faq-container">
                <h1>Frequently Asked Questions</h1>
                <p id="subhead">Can't find your answer? Email locatia.recruitment@gmail.com for more help!</p>
                {
                    Object.keys(faqInfo).length !== 0 &&
                    <>
                        <div id="category-selector">
                            {
                                Object.keys(faqInfo).map((category, index) => {
                                    return (
                                        <CategorySelector key={index} name={category} setCategory={setSelectedCategory} currCategory={selectedCategory}/>
                                    )
                                })
                            }
                        </div>
                        <div id="questions-container">
                            {
                                Object.keys(faqInfo[selectedCategory]).map((question, index) => {
                                        return (
                                            <Question key={index} title={question} answer={faqInfo[selectedCategory][question]} />
                                        )
                                    }
                                )
                            }
                        </div>
                    </>
                }
            </div>
            <CopyrightFooter />
        </>
    )
}

export default FaqContainer;