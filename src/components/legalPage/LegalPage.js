import CopyrightFooter from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import "./legalPage.css";
import { useState, useEffect } from "react";

function LegalPage({ fileName }){
    const [content, setContent] = useState([]);
    const [header, setHeader] = useState("");
    
    useEffect(() => {
        fetch('/assets/legal/' + fileName)
        .then(response => response.text())
        .then(data => {
            let lines = data.split('\n');
            setHeader(lines[0]);
            lines.shift();
            setContent(lines);
        })
    }, [fileName])
    
    return(
        <>
            <NavBar />
            <div id="legal">
                <h2>{header}</h2>
                {
                    content.map((line, index) => {
                        line = line.trim()
                        let className = ""
                        if (line.startsWith('<indent>')){ 
                            className = "indent";
                            line = line.substring(8);
                        }
                        return <p className={className} key={index}>{line}</p>
                    })
                }
            </div>
            <CopyrightFooter />
        </>
    )
}

export default LegalPage;
