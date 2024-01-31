import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import "../style/ChatBox.scss"
const ChatBoxELement = () => {
  return (
    <div id="chatbox-container">
      <div id="chatbox-header">
        ChatBox
      </div>
      <div id="chatbox-body">
        <div className="chat-body">
          <div className="message sent">
            <p>Hello</p>
          </div>
          <div className="message received">
            <p>Hi! I'm doing well, thanks.</p>
          </div>
        </div>
      </div>
      <input type="text" id="chatbox-input" placeholder="Type your message..." />
    </div>
  );
};

export default ChatBoxELement;
