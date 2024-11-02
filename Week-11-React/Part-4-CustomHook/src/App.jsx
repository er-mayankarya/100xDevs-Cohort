import { useEffect, useState } from 'react'


/*
// Implementation of useFetch - Custom Hook

import { useFetch } from './hooks/useFetch';

function App() {
  const {data} = useFetch("any_url");
  return <div>
    {data}
  </div>
}*/

// Implementation of usePrev - Custom Hook (Important)

import { usePrev } from './hooks/usePrev'

function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return <>
  <p>{state}</p>
  <button onClick={() => {
    setState(curr => curr + 1)
  }} >Click Me</button>
  <p> The Previous Value Was {prev} </p>

  </>
}

export default App
