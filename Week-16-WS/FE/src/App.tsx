import { useEffect, useState } from "react";


function App(){
  const [socket , setSocket] = useState();

  function sendMessages(){
    if (!socket) {
      return
    }
    //@ts-ignore
    socket.send("pong");

  }

  useEffect( () => {
    const ws = new WebSocket("ws://localhost:3090");
    //@ts-ignore
    setSocket(ws);
    
    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  } , [])

  return <div>
    <input type="text" placeholder="Enter" />
    <button onClick={ sendMessages }>Send</button>
  </div>
}

export default App;