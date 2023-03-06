import React from "react";
import FAQComponent from "../components/FAQComponent";

function FAQScreen(props) {

    return (
      <FAQComponent faqs={props.faqs}/>
    )
}

export default FAQScreen