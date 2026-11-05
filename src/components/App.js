import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [buton,setButton] = useState(false);

  return (
    <div id="main">
      <button id="click" onClick={(e)=>setButton(prev => !prev)}>click</button>   
      {buton && (
        <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      )}
    </div>
  );
}


export default App;
