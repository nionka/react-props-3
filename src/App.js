import './App.css';
import { messages } from './data/data';
import MessageHistory from './components/messageHistory/MessageHistory';

function App() {
  return (
    <div className="clearfix container">
      <div className="people-list"></div>
    <div className="chat">
      <div className="chat-history">
        <MessageHistory list={messages} />
      </div>
    </div>  
  </div>
  );
}

export default App;
