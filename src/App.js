import './App.css';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'

import ActionProvider from './component/botProps/ActionProvider';
import config from './component/botProps/config';
import MessageParser from './component/botProps/MessagePaser'

function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
       <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
      </header>
    </div>
  );
}

export default App;
