import React, { useState } from "react";

// useRef() Hook
import { useRef } from "react";

function App(){


  //useRef() hook in DOM
  const [count , setCount] = useState(0);
  const timerRef = useRef();

  function startClock(){
    let value = setInterval( () => {
      setCount(c => c +1)
    } , 1000);
    timerRef.current = value;
  }

  function stopClock(){
    clearInterval(timerRef.current);
  }

  return <div>
    {count}
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>

  /*
  // useRef() hook in DOM
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  }

  return <div>
    Sign Up
    <input ref={inputRef} type="text"></input>
    <button onClick={handleFocus}>Submit</button>

  </div>
  */
}

export default App


//Routing in React & SPAs
/*
import { BrowserRouter, Routes, Route, Link , useNavigate} from "react-router-dom";

function App() {

  return <div>
    <BrowserRouter>
    <Link to="/">Home</Link>
    |
    <Link to="/class11">Class 11</Link>
    |
    <Link to="/class12"> Class 12</Link>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/class11" element={<Class11 />} />
        <Route path="/class12" element={<Class12 />} />
      </Routes>
    </BrowserRouter>
  </div>
}


function Landing() {
  return <div>
    Welcome to My Coaching
  </div>
}

function Class11() {
  return <div>
    Class 11 Programs
  </div>
}

function Class12() {

  const navigate = useNavigate();

  return <div>
    Class 12 Program
    <button onClick={() => {
      navigate('/');
    }}> Go Back To Landing page</button>
  </div>
}
*/