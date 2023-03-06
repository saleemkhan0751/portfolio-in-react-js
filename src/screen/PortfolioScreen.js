import React from "react";
import PortfolioComponent from "../components/PortfolioComponent";

function PortfolioScreen(props) {
    return (
     <PortfolioComponent portfolios={props.portfolios} settings={props.settings}/>
    )
}

export default PortfolioScreen