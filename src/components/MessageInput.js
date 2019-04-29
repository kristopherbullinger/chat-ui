import React, { useState } from 'react'


const MessageInput = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    let message = {avatar: "", text };
    props.sendMessage(message);
    setText("");
  }

  const handleChange = e => {
      setText(e.target.value)
  }

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  return (
    <div id="message-input">
      <input name="message"
             type="text"
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
