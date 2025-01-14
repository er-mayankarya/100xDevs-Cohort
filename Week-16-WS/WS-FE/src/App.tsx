import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [socket , setSocket] = useState();
  const inputRef = useRef();

  function sendMessage(){
    if (!socket) {
      return;
    }
    const mess = inputRef.current.value;
    //@ts-ignore
    socket.send(mess);
  }

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    //@ts-ignore
    setSocket(ws);
  
    ws.onmessage = (message) => {
      alert(message.data);
    }
    
  }, [])

  return <div>
    <input ref={inputRef} type='text' placeholder='Enter Message...' />
    <button onClick={sendMessage}>Send</button>
  </div>
}

export default App
