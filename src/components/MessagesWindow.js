import React, { useEffect } from 'react'
import Message from './Message.js'


const MessagesWindow = props => {

  const scrollRef = React.createRef();

  const renderMessages = () => props.messages.map( (msg,i) => {
    return (<Message key={i}
                     msg={msg}
                     username={props.username}
                     lastMessage={i === (props.messages.length - 1)}/>
    )
  })

  return (
    <div id="message-window">
      {renderMessages()}
    </div>)
}

export default MessagesWindow;
