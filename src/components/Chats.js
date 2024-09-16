import React, { useState } from 'react';
import './Chats.css';

function Chats() {
  const [messages, setMessages] = useState([
    { text: 'Hello!', sender: 'self', timestamp: new Date().toLocaleString() },
    { text: 'Hi there!', sender: 'other', timestamp: new Date().toLocaleString() },
  ]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([
        ...messages,
        { text: inputValue, sender: 'self', timestamp: new Date().toLocaleString() },
      ]);
      setInputValue('');
    }
  };

  return (
    <div className="chats-page">
      <div className="members-list">
        <div className="members-header">Members</div>
        <div className="member">Member 1</div>
        <div className="member">Member 2</div>
        <div className="member">Member 3</div>
      </div>
      <div className="chat-area">
        <div className="chat-header">Member 1</div>
        <div className="messages-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'self' ? 'sent' : 'received'}`}
            >
              <span className="message-text">{message.text}</span>
              <span className="message-timestamp">{message.timestamp}</span>
            </div>
          ))}
        </div>
        <div className="message-input-container">
          <input
            type="text"
            className="message-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message"
          />
          <button className="send-button" onClick={sendMessage}>
            <i className="fa fa-paper-plane"></i> {/* Send Icon */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chats;
