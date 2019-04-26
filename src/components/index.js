
//This is your top level React component, you may change everything

import React from 'react'
import logo from '../assets/spotim-logo.jpg'
import {Container, Image} from 'semantic-ui-react'
import styled from 'styled-components';
import ChatWindow from './ChatWindow.js'
import { subscribeToMessages } from '../index.js'

const Logo = styled.div`
      img{
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
      }
`;

class App extends React.Component {

  state = {
    messages: [],
    username: "",
    loggedIn: false
  }

  componentDidMount() {
    subscribeToMessages(this.receiveMessage);
  }

  receiveMessage = data => {
    this.setState({messages: [...this.state.messages, data]});
  }

  sendMessage = (messageData) => {
    if (this.state.loggedIn && messageData.text) {
      this.props.socket.emit('spotim/chat', Object.assign(messageData, {username: this.state.username}));
    } else {
      window.alert("Please do not send anonymous or empty messages!")
    }
  }


  render() {
    return (
      <React.Fragment>
        <Container className={'spotim-header'}>
          <div className={'spotim-title'}>
            Welcome to the Spot.IM Chat app!
          </div>
          <div>
            <Logo>
              <Image size={'tiny'} src={logo}/>
            </Logo>
          </div>
        </Container>
        <Container>
        {this.state.loggedIn ?
            <ChatWindow messages={this.state.messages} sendMessage={this.sendMessage}/>
            : <React.Fragment>
                <input type="text" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
                <button onClick={() => this.setState({loggedIn: true})}>Set Username</button>
              </React.Fragment>}
        </Container>
      </React.Fragment>)
  }
}

export default App;
