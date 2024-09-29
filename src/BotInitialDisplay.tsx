import React from 'react';
import chatbot from './assets/chatbot.png';
import './BotInitialDisplay.css';

interface BotInitialDisplayProps {
  onClick: () => void;
}

const BotInitialDisplay: React.FC<BotInitialDisplayProps> = ({ onClick }) => {
  return (
    <div className="bot-initial-display" onClick={onClick}>
      <img src={chatbot} alt="Bot" className="bot-image" />
      <div className="bot-text-bubble">
        <p className="bot-text">Spune-mi cu ce te pot ajuta</p>
      </div>
    </div>
  );
};

export default BotInitialDisplay;