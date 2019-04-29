
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
    //connect to chat server upon mounting
    subscribeToMessages(this.receiveMessage);
  }

  receiveMessage = data => {
    console.log(data);
    //safeguard against messages which do not conform to assigned structure
    if (typeof data.text === "string" && typeof data.username === "string" && typeof data.avatar === "string") {
      this.setState({messages: [...this.state.messages, data]});
    }
  }

  sendMessage = (messageData) => {

    //format a timestamp for the message
    let sentDate = new Date();
    let hours = sentDate.getHours() > 12 ? sentDate.getHours() - 12 : sentDate.getHours();
    let minutes = sentDate.getMinutes() < 10 ? "0" + sentDate.getMinutes() : sentDate.getMinutes();
    messageData.sentTime = sentDate.getHours() > 12 ? `${hours}:${minutes} PM` : `${hours}:${minutes} AM`
    console.log(messageData);

    //keep track of current username for styling purposes
    this.setState({username: messageData.username})

    //do not emit message without username or message content
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
