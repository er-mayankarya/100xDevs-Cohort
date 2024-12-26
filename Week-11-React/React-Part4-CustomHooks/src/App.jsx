import { useFetch } from "./hooks/useFetch"


function App() {

  const { data, loading, error } = useFetch("url_string");

  return <div>
  {data}
  </div>
}

export default App
