import React from "react";
import ServiceComponent from "../components/ServiceComponent";

function ServiceScreen(props) {
    return (
     <ServiceComponent services={props.services} settings={props.settings}/>

    )

}

export default ServiceScreen