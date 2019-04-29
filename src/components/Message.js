import React, { useEffect } from 'react'



const Message = props => {

  const { msg, username, lastMessage } = props;

  const self = msg.username === username;

  const scrollRef = lastMessage ? React.createRef() : null;

  useEffect( () => {
    console.log(lastMessage, scrollRef)
    lastMessage ? scrollRef.current.scrollIntoView() : null;
  })

  return (<div className="clearfix" ref={scrollRef} style={{marginTop: 5}}>
            {self ? null
                  : <div class="message-username">
                      {msg.username}
                    </div>}
            <span className={"message" + (self ? " self" : "")}>
                  {msg.text}
            </span>
          </div>
  )
}

export default Message;
