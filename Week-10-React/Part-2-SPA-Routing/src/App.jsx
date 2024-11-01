/*
// External Library for routing : react-router-dom

import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return <div>
    <BrowserRouter>
      <Link to="/">Allen</Link>
      | 
      <Link to="/neet/online-coaching-class-11">Class 11</Link> 
      | 
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      <Routes>
        <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
        <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </div>
}

function Landing() {
  return <div>
    Welcome to allen
  </div>
}

function Class11Program() {
  return <div>
      NEET programs for Class 11th
  </div>
}

function Class12Program() {
  return <div>
      NEET programs for Class 12th
  </div>
}
*/


// useRef() hook

import { useRef } from 'react'
function App(){

  const inputRef = useRef();

  function focusOnInput(){
    //document.getElementById("name").focus()
    inputRef.current.focus();
  }

  return <div>
    SignUp
    <input ref={inputRef} id='name' type={"text"}></input>
    <input type={"text"} ></input>
    <button onClick = {focusOnInput}>Submit</button>
  </div>
}


export default App

