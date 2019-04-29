import React, { useState } from 'react'


const MessageInput = (props) => {
  const [text, setText] = useState("");
  //user can use a different username with each submission. when they change usernames, only messages matching
  //the newly assigned username will display as though they were sent from this user
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  const textRef = React.createRef();
  const usernameRef = React.createRef();

  const handleSubmit = () => {
    //safeguard against emitting empty or anonymous messages
    if (text && username) {
      let message = {avatar, text: text.trim(), username };
      props.sendMessage(message);
      setText("");
    }

    //if text or username is empty, focus appropriate input field to prompt user to enter value
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
        default:
          break;
      }
  }

  const handleKeyPress = e => {
    //allow user to submit message with enter key
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
