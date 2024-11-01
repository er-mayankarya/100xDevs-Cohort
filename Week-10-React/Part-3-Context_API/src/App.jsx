// Rolling of States , Props Drilling , Context API

/*
// Roliing up the states

import { useState } from 'react'

function App() {
  return <div>
    <LightBulb />
  </div>
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true)

  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function BulbState({bulbOn}) {
  return <div>
    {bulbOn ? "Bulb ON" : "Bulb OFF"}
  </div>
}

function ToggleBulbState({bulbOn, setBulbOn}) {

  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
    
  }

  return <div>
    <button onClick={toggle}>Toggle The bulb</button>
  </div>
}
*/

//Props Drilling & Context API

import { useState , createContext , useContext} from "react";

const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return <div>
    <BulbContext.Provider value={{
      bulbOn : bulbOn ,
      setBulbOn : setBulbOn
    }}>
      <Light />
    </BulbContext.Provider>
  </div>
}

function Light() {

  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>
    {bulbOn ? "Bulb ON" : "Bulb OFF"}
  </div>
}

function LightSwitch() {
  const { bulbOn , setBulbOn } = useContext(BulbContext);

  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
    
  }

  return <div>
    <button onClick={toggle}>Toggle The Bulb</button>
  </div>
}

export default App
