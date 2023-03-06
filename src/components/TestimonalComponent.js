import React from "react";
import TestimonalPage from "../pages/TestimonalPage";

function TestimonalComponent(props) {

    return (
        <TestimonalPage testimonials={props.testimonials} settings={props.settings}/>
    )
}

export default TestimonalComponent