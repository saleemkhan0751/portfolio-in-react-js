import React from "react";
import ServicePage from "../pages/ServicePage";

function ServiceComponent(props) {
    return (
        <ServicePage  services={props.services} settings={ props.settings}/>
    )
}

export default ServiceComponent