import React from "react";
import TestimonalComponent from "../components/TestimonalComponent";

function TestimonalScreen(props) {
    return (
        <TestimonalComponent testimonials={props.testimonials} settings={props.settings}/>
    )
}

export default TestimonalScreen