import React from "react";
import TeamPage from "../pages/TeamPage";
import TeamComponent from "../components/TeamComponent";

function TeamScreen(props) {
    return (
<TeamComponent teams={props.teams} settings={props.settings}/>
    )
}

export default TeamScreen