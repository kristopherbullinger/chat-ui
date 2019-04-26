import React, { component } from 'react'
import MessagesWindow from './MessagesWindow.js'
import MessageInput from './MessageInput.js'



const ChatWindow = (props) => {

  return (
    <div id="chat-window">
      <MessagesWindow messages={props.messages}/>
      <MessageInput sendMessage={props.sendMessage}/>
    </div>
  )
}

export default ChatWindow;
