import React from "react";
import TeamPage from "../pages/TeamPage";

function TeamComponent(props) {
    return (
        <TeamPage teams={props.teams} settings={props.settings}/>
    )
}

export default TeamComponent