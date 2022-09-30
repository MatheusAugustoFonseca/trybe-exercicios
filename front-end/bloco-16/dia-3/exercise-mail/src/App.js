import './App.css';
import List from './components/List';
import { useState, useEffect } from 'react';
import messagesList from './data/messagesEmailList';
import { READ, UNREAD } from './constants';
import Controls from './components/Controls';

function App() {

  const [massages, setMessages] = useState(messagesList);

  useEffect(() => {
    const isAllMsgRead = massages.every(({ status }) => status === READ);
    
    if (isAllMsgRead) {
      alert('Você já leu todas as suas mensagens');
    }
  }, [massages]);

  const setMessageStatus = (messageId, newStatus) => {
    const updateMessages = massages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus }
      }
      return currentMessage;
    });

    setMessages(updateMessages);
  };

  const markAllAsRead = () => {
    const allRead = massages.map((msg) => ({...msg, status: READ }))
    setMessages(allRead);
  };

  const markAllAsUnread = () => {
    const allRead = massages.map((msg) => ({...msg, status: UNREAD}))
    setMessages(allRead);
  }


  return (
    <div className="App">
      <header>
      <h1>trybeMail</h1>
      </header>

    <Controls 
      markAllAsRead={markAllAsRead}
      markAllAsUnread={markAllAsUnread}
    />

      <List 
      messages={massages} 
      setMessagenStatus={ setMessageStatus }
      />

    </div>
  );
}

export default App;
