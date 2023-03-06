import React from "react";
import AboutPage from "../pages/AboutPage";
import AboutScreen from "../screen/AboutScreen";

function AboutComponent(props) {
    console.log('settings_component',props.settings)
    return (
        <AboutPage  about_us={props.about_us} settings={props.settings}/>
    )
}
export default AboutComponent