import React from "react";
import { Header, Image, Table } from 'semantic-ui-react'
import styled from "styled-components";

//images
import espnfantasyLogo from "../Assets/Personal-images/espnfantasy.png";
import yahoofantasyLogo from "../Assets/Personal-images/yahoofantasy.png";
import gmailLogo from "../Assets/Personal-images/gmail.png";
import gmailcalenderLogo from "../Assets/Personal-images/googlecalender.png";
import googledriveLogo from "../Assets/Personal-images/googledrive.png";
import bleacherreportLogo from "../Assets/Personal-images/bleacherreport.png";
import anrestorationLogo from "../Assets/Personal-images/anrestoration.png";






const Professional = styled.div `
    display: flex;
    justify-content: center;

`;

const HeaderList = styled.header `
    font-size: 1.4rem;
    text-align: center;
`;






function Personal() {
  return (
      <Professional>
    <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell><HeaderList>Personal</HeaderList></Table.HeaderCell>
       
      </Table.Row>
    </Table.Header>

    <Table.Body>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={espnfantasyLogo} rounded size='tiny' />
            <Header.Content>
              <a href = "https://www.espn.com/fantasy/football/">ESPN Fantasy Football</a>
              <Header.Subheader>Check Your Team</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={yahoofantasyLogo} rounded size='tiny' />
            <Header.Content>
              <a href = "https://profiles.sports.yahoo.com/">Yahoo Fantasy Football</a>
              <Header.Subheader>Check Your Team</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={gmailLogo} rounded size='tiny' />
            <Header.Content>
              <a href = "https://mail.google.com/mail/u/0/#inbox">Gmail</a>
              <Header.Subheader>Gmail Account</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={gmailcalenderLogo} rounded size='tiny' />
            <Header.Content>
              <a href = "https://calendar.google.com/calendar/r">Google Calender</a>
              <Header.Subheader>Check Events</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
      
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={googledriveLogo} rounded size='tiny' />
            <Header.Content>
              <a href = "https://drive.google.com/drive/my-drive">Google Drive</a>
              <Header.Subheader>Drive Storage</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
      
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={bleacherreportLogo} rounded size='tiny' />
            <Header.Content>
              <a href = "https://bleacherreport.com/">Bleacher Report</a>
              <Header.Subheader>Sports News</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={anrestorationLogo} rounded size='tiny' />
            <Header.Content>
              <a href = "https://andrewnadurestoration.netlify.com/">Andrew Nadu: Restoration</a>
              <Header.Subheader>Restoration and Masonry</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      
    </Table.Body>
  </Table>
  </Professional>
  );
}

export default Personal;
