import React from 'react'



const MessagesWindow = props => {

  const renderMessages = () => props.messages.map( (msg, i) => <p key={i} className="message">{msg.username}: {msg.text}</p>)

  return (
    <div id="message-window">
    {renderMessages()}
    </div>)
}


export default MessagesWindow;
