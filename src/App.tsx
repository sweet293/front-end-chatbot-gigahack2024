import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatWindow from './ChatWindow';
import BotInitialDisplay from './BotInitialDisplay';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <h1>Welcome to My App!</h1>
      {/* Other components or content can go here */}
      {isChatOpen ? (
        <ChatWindow onClose={handleToggleChat} />
      ) : (
        <BotInitialDisplay onClick={handleToggleChat} />
      )}
    </div>
  );
}

export default App;