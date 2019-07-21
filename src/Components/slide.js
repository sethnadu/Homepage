import React, { Component } from 'react'
import School from "./school";
import Personal from "./personal";
import Football from "./football.js";
import { Button, Menu, Segment, Sidebar } from 'semantic-ui-react'
import styled from "styled-components";
import '../App.scss';


const SidebarHide = styled.div `
    width: 100vw;
`


const Widgets = styled.div `
  display: flex;
  flex-direction: column;
  margin: auto auto auto auto;
 
`;


export default class SideBar extends Component {


    




  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show 
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide
          </Button>
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='wide'
          >
            <Menu.Item as='div'>
             <School></School>
            </Menu.Item>
            <Menu.Item as='div'>
            <Personal></Personal>
            </Menu.Item>
          </Sidebar>
        <SidebarHide>
          <Sidebar.Pusher>
            <div className = "App">
            <Widgets>
                <Football></Football>
             </Widgets>
           </div>
          </Sidebar.Pusher>
          </SidebarHide>
        </Sidebar.Pushable>
      </div>
    )
  }
}