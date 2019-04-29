
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
    username: ""
  }

  componentDidMount() {
    subscribeToMessages(this.receiveMessage);
  }

  receiveMessage = data => {
    this.setState({messages: [...this.state.messages, data]});
  }

  sendMessage = (messageData) => {
    let sentDate = new Date();
    messageData.sentTime = sentDate.getHours() > 12 ? `${sentDate.getHours() - 12}:${sentDate.getMinutes()} PM` : `${sentDate.getHours()}:${sentDate.getMinutes()} AM`
    console.log(messageData);
    this.setState({username: messageData.username})
    if (messageData.username && messageData.text) {
      this.props.socket.emit('spotim/chat', messageData);
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
          <ChatWindow messages={this.state.messages}
                        sendMessage={this.sendMessage}
                        username={this.state.username}/>
        </Container>
      </React.Fragment>)
  }
}

export default App;
