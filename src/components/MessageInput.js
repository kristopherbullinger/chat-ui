import React, { useState } from 'react'


const MessageInput = (props) => {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  const textRef = React.createRef();
  const usernameRef = React.createRef();

  const handleSubmit = () => {
    if (text && username) {
      let message = {avatar, text: text.trim(), username };
      props.sendMessage(message);
      setText("");
    }
    if (!text) {
      textRef.current.focus();
    } else if (!username) {
      usernameRef.current.focus();
    }
  }

  const handleChange = e => {
      switch (e.target.name) {
        case "username":
          setUsername(e.target.value);
          break;
        case "avatar":
          setAvatar(e.target.value);
          break;
        case "text":
          setText(e.target.value);
          break;
      }
  }

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div id="message-input">
      <span>
        <input name="username"
               type="text"
               ref={usernameRef}
               onChange={handleChange}
               onKeyPress={handleKeyPress}
               value={username}
               placeholder="Username"/>
        <input name="avatar"
               type="text"
               onChange={handleChange}
               onKeyPress={handleKeyPress}
               value={avatar}
               placeholder="Avatar URL"/>
      </span>
      <textarea name="text"
                type="text"
                ref={textRef}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={text}
                placeholder="Type something..."/>
      <button
        onClick={handleSubmit}>
        Send
      </button>
    </div>
  )
}


export default MessageInput;
