import React from "react";
import ClientComponent from "../components/ClientComponent";
import ContactComponent from "../components/ContactComponent";

function ContactScreen(props) {
    return (
       <ContactComponent settings={props.settings}/>
    )
}

export default ContactScreen