
//usePrev() - Custom Hooks
import React, { useState } from 'react'
import { usePrev } from './hooks/usePrev';

const App = () => {
  const [state , setState] = useState(0);
  const prev = usePrev(state);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState(c => c +1 )}>Click Me</button>
      <h3>The Previous Value is {prev}</h3>
    </div>
  )
}

export default App


/*
//useFetch() - Custom Hook
import { useFetch } from "./hooks/useFetch"


function App() {

  const { data, loading, error } = useFetch("url_string");

  return <div>
  {data}
  </div>
}

export default Ap*/
