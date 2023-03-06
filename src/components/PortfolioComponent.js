import React from "react";
import PortfolioPage from "../pages/PortfolioPage";

function PortfolioComponent(props) {
    return (
        <PortfolioPage portfolios={props.portfolios} settings={props.settings}/>
    )
}

export default PortfolioComponent