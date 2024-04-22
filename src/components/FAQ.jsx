import React from "react";
import folderarrow from "../assets/folderpilned.svg";

function FAQ({question, answer}) {
    return(
        <>
        <div className="FAQ">
            <div className="faquestion">
                <h3>{question}</h3>
                <img src={folderarrow} alt="Pil" className="folderarrow" />
            </div>
            
            <div className="faqcontent">
                <p>{answer}</p>
            </div>
        </div>
        </>

    );
}
export default FAQ; 