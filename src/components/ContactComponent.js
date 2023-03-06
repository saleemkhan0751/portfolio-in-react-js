import React from "react";
import ContactPage from "../pages/ContactPage";

function ContactComponent(props) {
    return (
        <ContactPage settings={props.settings}/>
    )
}

export default ContactComponent