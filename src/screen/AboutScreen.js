import React from "react";
import AboutComponent from "../components/AboutComponent";

function AboutScreen(props) {
console.log('about_us_component',props.about_us)
console.log('settings_component',props.settings)
    return (
        <AboutComponent  about_us={props.about_us} settings={props.settings}/>
    )
}

export default AboutScreen