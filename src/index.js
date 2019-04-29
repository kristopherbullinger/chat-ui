
//This is then entry point for your app. Do as you wish.

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components";
import io from "socket.io-client";

//connecting to Socket.IO chat server
const socket = io("https://spotim-demo-chat-server.herokuapp.com");
socket.on("connect", function() {
  console.log("connected to chat server!");
});
socket.on("disconnect", function() {
  console.log("disconnected from chat server!");
});


//allow component to receive messages and execute callback such as setState
function subscribeToMessages (callback) {
  socket.on('spotim/chat', (data) => callback(data))
}

ReactDOM.render(<App socket={socket}/>, document.getElementById("root"));

export { subscribeToMessages };
