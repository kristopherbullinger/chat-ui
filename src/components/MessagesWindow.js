import React, { useEffect } from 'react'



const MessagesWindow = props => {

  const scrollRef = React.createRef();

  const renderMessages = () => {
    return props.messages.map( (msg, i) => {
      const self = msg.username === props.username;
      const innerText = self ? `${msg.text}` : `${msg.username}: ${msg.text}`
      return <div className={self ? "clearfix" : ""}><span key={i}
                className={"message" + (self ? " self" : "")}
                ref={i === props.messages.length - 1 ? scrollRef : null}>
                {innerText}
              </span></div>})

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
