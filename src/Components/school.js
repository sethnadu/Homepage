import React from "react";
import { Header, Image, Table } from 'semantic-ui-react'
import styled from "styled-components";

//images
import lambdaLogo from "../Assets/School-images/lambdaLogo.png";
import githubLogo from "../Assets/School-images/Github.png";
import codepenLogo from "../Assets/School-images/codepen.png";
import codesandboxLogo from "../Assets/School-images/codesandbox.png";
import replLogo from "../Assets/School-images/repl.png";
import netlifyLogo from "../Assets/School-images/netlify.png";
import namecheapLogo from "../Assets/School-images/namecheap.png";
import linkedinLogo from "../Assets/School-images/linkedin.png";
import portfolioLogo from "../Assets/School-images/portfolio.png";


const Professional = styled.div `
    display: flex;
    justify-content: center;

`;

const HeaderList = styled.header `
    font-size: 1.4rem;
    text-align: center;
`;





function School() {
  return (
    <Professional>
    <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell><HeaderList>Professional</HeaderList></Table.HeaderCell>
       
      </Table.Row>
    </Table.Header>

    <Table.Body>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={lambdaLogo} rounded size='tiny' />
            <Header.Content>
              <a href = "https://dashboards.lambdaschool.com/students/seth-nadu/">Lambda DashBoard</a>
              <Header.Subheader>Check Your Grades</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={lambdaLogo} rounded size='tiny' />
            <Header.Content>
            <a href = "https://learn.lambdaschool.com/course/cs-fsw">Training Kit</a>
              <Header.Subheader>Learn New Info</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={githubLogo} rounded size='tiny' />
            <Header.Content>
            <a href = "https://github.com/sethnadu">GitHub</a>
              <Header.Subheader>Profile with Repos</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={codepenLogo} rounded size='tiny' />
            <Header.Content>
            <a href = "https://codepen.io/sethna/">Codepen</a>
              <Header.Subheader>CodePen Files</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={codesandboxLogo} rounded size='tiny' />
            <Header.Content>
            <a href = "https://codesandbox.io/dashboard/recent">CodeSandbox</a>
              <Header.Subheader>CodeSandbox Files</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={replLogo} rounded size='tiny' />
            <Header.Content>
            <a href = "https://repl.it/@SethNadu">Repl.it</a>
              <Header.Subheader>Challenges</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={netlifyLogo} rounded size='tiny' />
            <Header.Content>
            <a href = "https://app.netlify.com/teams/sethnadu/sites">Netlify</a>
              <Header.Subheader>Netlify Sites</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={namecheapLogo} rounded size='tiny' />
            <Header.Content>
            <a href = "https://ap.www.namecheap.com/">NameCheap</a>
              <Header.Subheader>Porfolio Website Manage</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={linkedinLogo} rounded size='tiny' />
            <Header.Content>
            <a href = "https://www.linkedin.com/in/seth-nadu-8b5983187/">LinkedIn</a>
              <Header.Subheader>LinkedIn Website</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={portfolioLogo} rounded size='tiny' />
            <Header.Content>
            <a href = "https://www.sethnadu.com/">Portfolio</a>
              <Header.Subheader>Seth Nadu Portfolio</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>


      
    </Table.Body>
  </Table>
  </Professional>

  );
}

export default School;
