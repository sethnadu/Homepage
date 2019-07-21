import React from "react";
import styled from "styled-components";
import { Tab } from 'semantic-ui-react'


const Frame = styled.iframe`
    margin: 20px auto;

`;

const Styling = styled.div `
    background-color: #b5bcbe;
    margin: 20px auto 20px auto;
    border: 4px solid black;
    box-shadow: 5px 5px 10px black;
    border-radius: 10px;
    max-width: 480px;

    @media (max-width: 550px) {
        margin: 20px 2px 20px 2px;
    }


`;



const panes = [
    { menuItem: 'Eagles', render: () => <Tab.Pane><Frame src="https://www.espn.com/nfl/team/schedule/_/name/phi" width="100%" height="350"></Frame><Frame id="n_2" src="https://bleacherreport.com/philadelphia-eagles" width="100%" height="350"></Frame></Tab.Pane> },
    { menuItem: 'Eagles Stats', render: () => <Tab.Pane><Frame src="https://swishanalytics.com/partners/nfl/team-stats?id=354" width="100%" height="280"></Frame><Frame id="n_1" src="https://www.numberfire.com/external/widgets/teams/philadelphia-eagles" width="100%" height="400"></Frame></Tab.Pane> },
    { menuItem: 'Projections', render: () => <Tab.Pane><Frame id="n_0" src="https://www.numberfire.com/external/widgets/top-players" width="100%" height="400"></Frame><Frame src="https://swishanalytics.com/partners/nfl/weekly-fantasy-leaders?id=406214&s=0&p=all" width="100%" height="400" ></Frame></Tab.Pane> },
    { menuItem: 'Start', render: () => <Tab.Pane><Frame id="n_2" src="https://www.numberfire.com/external/widgets/who-should-i-start" width="100%" height="350"></Frame></Tab.Pane> },
  ]
  




function Football () {
    

    return (
        <>
        <Styling>
        <Tab panes={panes}/>
        </Styling>
        </>
    )

}

export default Football;