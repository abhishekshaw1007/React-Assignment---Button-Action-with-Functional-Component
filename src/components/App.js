import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [showPara, setShowPara] = useState(false); // used to declare our own State variables in function, can't be used in class component
  return (
    <div id="main">
      <button id="click" onclick={() => setShowPara(!showPara)}>Toggle Para</button>
      {showPara ? (<p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>) : null}
    </div>
  );
}


export default App;
