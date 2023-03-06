import React from "react";
import FAQPage from "../pages/FAQPage";

function FAQComponent(props) {
    return (
        <FAQPage faqs={props.faqs}/>
    )
}

export default FAQComponent