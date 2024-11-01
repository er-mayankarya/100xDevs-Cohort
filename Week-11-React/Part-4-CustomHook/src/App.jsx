import { useEffect, useState } from 'react'

import { useFetch } from './hooks/useFetch';

function App() {
  const {data} = useFetch("any_url");
  return <div>
    {data}
  </div>
}

export default App
