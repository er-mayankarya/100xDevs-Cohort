import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"

const BulbContext = createContext();

export function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);
  return <BulbContext.Provider value={{
    bulbOn : bulbOn,
    setBulbOn : setBulbOn
  }}>
    {children}
  </BulbContext.Provider>
}


function App() {

  return <div>
    <BulbProvider>
      <LightBulb />
    </BulbProvider>
  </div>
}

function LightBulb() {

  return <div>
    <BulbState />
    <ToggleBulbstate />
  </div>
}

function BulbState() {
  const {bulbOn} = useContext(BulbContext);
  return <div>
    {bulbOn ? "Bulb is ON" : "Bulb is OFF"}
  </div>
}

function ToggleBulbstate() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);

  function toggle() {
    setBulbOn(!bulbOn);
    //setBulbOn( currentState => !currentState);
  }
  return <div>
    <button onClick={toggle}>  Toggle The BULB </button>
  </div>
}
export default App
