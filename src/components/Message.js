import React, { useEffect } from 'react'



const Message = props => {

  const { msg, username, lastMessage } = props;

  const self = msg.username === username;

  const scrollRef = lastMessage ? React.createRef() : null;

  useEffect( () => {
    lastMessage ? scrollRef.current.scrollIntoView() : null;
  })

  return (<div className="clearfix" ref={scrollRef} style={{marginTop: 5}}>
            {self ? null
                  : <div className="message-username">
                      {msg.username + " || " + msg.sentTime}
                    </div>}
            {!self ? <img className="avatar"
                 src={msg.avatar}
                 alt="spotim user avatar"
                 onError={(e)=>{e.target.onerror = null; e.target.src="https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_1229%2Cy_0%2Cw_2712%2Ch_3616%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5b7ac48b4db3d70020c01c13%252Fshutterstock_1081879181.jpg"}}/>
                   : null}
            <span className={"message" + (self ? " self" : "")}>
                  {msg.text}
            </span>
          </div>
  )

  /*return (
    <div ref={scrollRef} style={{marginTop: 5}}>
      <div className="message-username">
        {msg.username + " || " + msg.sentTime}
      </div>
      <div className={"flexContainer" + (self ? " right" : null)}>
        {!self ? <img className="avatar"
             src={msg.avatar}
             alt="spotim user avatar"
             onError={(e)=>{e.target.onerror = null; e.target.src="https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_1229%2Cy_0%2Cw_2712%2Ch_3616%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5b7ac48b4db3d70020c01c13%252Fshutterstock_1081879181.jpg"}}/>
              : null}
        <span className={"message" + (self ? " self" : "")}>
            {msg.text}
        </span>
        {self ? <img className="avatar"
             src={msg.avatar}
             alt="spotim user avatar"
             onError={(e)=>{e.target.onerror = null; e.target.src="https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_1229%2Cy_0%2Cw_2712%2Ch_3616%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5b7ac48b4db3d70020c01c13%252Fshutterstock_1081879181.jpg"}}/>
              : null}
      </div>
    </div>
  )*/
}

export default Message;
