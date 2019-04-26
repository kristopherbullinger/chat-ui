import React, { useEffect } from 'react'



const MessagesWindow = props => {

  const scrollRef = React.createRef();

  const renderMessages = () => {
    return props.messages.map( (msg, i) => {
      return <p key={i}
                className="message"
                ref={i === props.messages.length - 1 ? scrollRef : null}>
                {msg.username}: {msg.text}
              </p>})

  }

  useEffect( () => {
    scrollRef.current ? scrollRef.current.scrollIntoView() : null;
  })

  return (
    <div id="message-window">
    {renderMessages()}
    </div>)
}


export default MessagesWindow;
